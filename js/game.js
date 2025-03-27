class TypingGame {
    constructor() {
        this.LEVELS = [
            { speed: 0.5, wordList: words_1, isKeyboardPractice: true },
            { speed: 1, wordList: words_1 },
            { speed: 2, wordList: words_1 },
            { speed: 2.5, wordList: words_2 },
            { speed: 3, wordList: words_2 },
            { speed: 3, wordList: words_3 },
            { speed: 3.5, wordList: words_3 },
            { speed: 3.5, wordList: words_4_to_6 },
            { speed: 3.5, wordList: words_8_or_more }
        ];

        this.TEST_PARAGRAPH = data;
        
        this.initializeElements();
        this.bindEvents();
        this.activeWords = [];
        this.oldMistakes = 0;
        this.totalBottomWords = 0; // Biến đếm tổng số từ chạm đáy
    }

    initializeElements() {
        this.startScreen = document.getElementById('start-screen');
        this.gameArea = document.getElementById('game-area');
        this.gameOverScreen = document.getElementById('game-over-screen');
        this.fallingWordsContainer = document.getElementById('falling-words');
        this.inputElement = document.getElementById('word-input');
        this.levelDisplay = document.getElementById('level-display');
        this.mistakesDisplay = document.getElementById('mistakes');
        this.timerDisplay = document.getElementById('timer');
        this.timeSelect = document.getElementById('time-select');
        this.levelSelect = document.getElementById('level-select');
        this.backBtn = document.getElementById('back-btn');

        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.closeBtn = document.getElementById('close-btn');

        this.keyboardContainer = document.getElementById('keyboard-container');
        this.keyHighlights = document.getElementById('key-highlights');
        this.leftHand = document.getElementById('left-hand');
        this.rightHand = document.getElementById('right-hand');

        this.speedBar = document.getElementById('speed-bar');
        this.speedDisplay = document.getElementById('speed-display');
        // Thêm các biến để theo dõi tốc độ
        this.correctWordsCount = 0;
        this.startTime = null;
        this.currentMistakes = [];
        
        this.levelSelect.innerHTML = `
            <option value="0" selected>Làm quen</option>
            ${Array.from({ length: 8 }, (_, i) => {
                const level = i + 1;
                const isSelected = level === 0 ? ' selected' : ''; // Đặt "Cấp 1" làm mặc định
                return `<option value="${level}"${isSelected}>Cấp ${level + 1}</option>`;
            }).join('')}
            <option value="9">Kiểm tra tốc độ</option>
        `;  
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.restartBtn.addEventListener('click', () => this.restartGame());
        this.closeBtn.addEventListener('click', () => this.closeGame());
        this.inputElement.addEventListener('input', (e) => this.handleInput(e));
        this.inputElement.addEventListener('keydown', (e) => this.handleMistakes(e));
        this.backBtn.addEventListener('click', () => this.returnToMenu());
        // Giữ focus khi nhấp bất kỳ đâu
        document.addEventListener('click', (e) => {
            if (this.gameArea.classList.contains('hidden')) return; // Bỏ qua nếu không ở game area
            if (e.target !== this.inputElement) {
                this.inputElement.focus();
            }
        });
    }

    startGame() {
        this.currentLevel = parseInt(this.levelSelect.value);
        this.startScreen.classList.add('hidden');
        this.gameArea.classList.remove('hidden');
        this.activeWords = [];
        this.correctWordsCount = 0; // Reset số từ đúng
        this.startTime = null; // Reset thời gian bắt đầu
        this.speedBar.style.width = '0%'; // Reset thanh speed
        this.speedDisplay.textContent = '0'; // Reset hiển thị tốc độ
        this.inputElement.focus(); // Đặt focus ngay khi bắt đầu
        if (this.currentLevel === this.LEVELS.length) {
            this.startTestMode();
        } else {
            this.setupLevel();
        }
    }

    setupLevel() {
        this.mistakes = 0;
        this.mistakesDisplay.textContent = '0';
        this.levelDisplay.textContent = this.currentLevel === 0 ? 'Làm Quen' : this.currentLevel + 1;
        this.fallingWordsContainer.innerHTML = '';
        this.inputElement.value = '';
        this.inputElement.focus();

        this.timerValue = parseInt(this.timeSelect.value);
        this.timerDisplay.textContent = this.timerValue;

        this.startWordFalling();
        this.startCountdown();
        this.totalBottomWords = 0; // Reset khi bắt đầu cấp độ mới
    }

    startWordFalling() {
        const level = this.LEVELS[this.currentLevel];
        let intervalTime = 1000 / level.speed; // Thời gian mặc định
        if (this.currentLevel === 0) {
            intervalTime = 2000; // Tăng thời gian lên 2 giây cho Level 0 để cách nhau lâu hơn
        }
    
        this.fallingWordsInterval = setInterval(() => {
            const word = GameUtils.getRandomElement(level.wordList);
            const wordElement = GameUtils.createWordElement(word, this.fallingWordsContainer.offsetWidth, this.activeWords);
            if (wordElement) {
                this.fallingWordsContainer.appendChild(wordElement);
                this.activeWords.push({
                    element: wordElement,
                    left: parseFloat(wordElement.style.left),
                    width: wordElement.offsetWidth
                });
                this.animateWord(wordElement, level.speed);
                if (word.length === 1) {
                    this.highlightLowestWord(); // Gọi hàm làm sáng từ thấp nhất
                }
            }
        }, intervalTime);
    }

    highlightLowestWord() {
        if (this.activeWords.length !== 1) return;
    
        // Tìm từ thấp nhất (gần đáy nhất)
        let lowestWord = this.activeWords.reduce((lowest, current) => {
            const lowestTop = parseFloat(lowest.element.style.top) || 0;
            const currentTop = parseFloat(current.element.style.top) || 0;
            return currentTop > lowestTop ? current : lowest;
        });
    
        // Làm sáng phím tương ứng với từ thấp nhất
        this.showKeyboardHint(lowestWord.element.textContent);
    }

    animateWord(wordElement, speed) {
        let position = 0;
    
        const interval = setInterval(() => {
            position += speed;
            wordElement.style.top = `${position}px`;
    
            const containerHeight = this.fallingWordsContainer.offsetHeight;
            const wordHeight = wordElement.offsetHeight;
            const positionThreshold = containerHeight - wordHeight * 0.5;
    
            if (position >= positionThreshold && !wordElement.dataset.warned) {
                wordElement.classList.add('bottom-warning');
                setTimeout(() => wordElement.classList.remove('bottom-warning'), 300);
                GameUtils.playSound('warning');
                wordElement.dataset.warned = true; // Đánh dấu để không lặp lại cảnh báo
            }
    
            if (position + wordHeight >= containerHeight) {
                clearInterval(interval);
                // Chỉ tăng totalBottomWords nếu wordElement vẫn còn trong DOM (chưa bị gõ đúng)
                if (wordElement.isConnected && this.activeWords.some(w => w.element === wordElement)) {
                    this.totalBottomWords++;
                    this.fallingWordsContainer.classList.add('bottom-glow');
                    setTimeout(() => {
                        this.fallingWordsContainer.classList.remove('bottom-glow');
                    }, 300); // Tắt hiệu ứng sau 300ms
    
                    if (this.totalBottomWords >= 10) {
                        this.gameOver('Quá nhiều từ chạm đáy!');
                    }
                }
                wordElement.remove();
                this.activeWords = this.activeWords.filter(w => w.element !== wordElement);
                return;
            }
    
            if (this.currentLevel === 0) {
                this.highlightLowestWord();
            }
        }, 50);
    }

    handleInput(e) {
        const input = e.target.value.trim();
        const words = Array.from(this.fallingWordsContainer.children);
        
        for (let word of words) {
            if (input === word.textContent) {
                word.classList.add('explode-effect');
                setTimeout(() => {
                    word.remove();
                    this.activeWords = this.activeWords.filter(w => w.element !== word);
                    if (word.textContent.length === 1) {
                        this.highlightLowestWord();
                    }
                }, 500);
                e.target.value = '';
                GameUtils.playSound('correct');
                if (this.LEVELS[this.currentLevel].isKeyboardPractice) {
                    this.showKeyboardHint(input);
                }
                // Cập nhật tốc độ
                this.updateSpeed(word.textContent);
                return;
            }
        }
    }

    updateSpeed(word) {
        if (!this.startTime) {
            this.startTime = Date.now(); // Bắt đầu tính thời gian khi gõ từ đầu tiên
        }
        this.correctWordsCount++; // Tăng số từ đúng
    
        const elapsedTime = (Date.now() - this.startTime) / 1000 / 60; // Thời gian trôi qua (phút)
        const wpm = Math.round(this.correctWordsCount / elapsedTime); // Tốc độ từ/phút
    
        // Cập nhật thanh speed (giới hạn tối đa 200 WPM để dễ hình dung)
        const maxWpm = 200;
        const speedPercentage = Math.min((wpm / maxWpm) * 100, 100); // Tính phần trăm
        this.speedBar.style.width = `${speedPercentage}%`;
        this.speedDisplay.textContent = wpm;
    
        // Hiệu ứng sáng lên
        this.speedBar.classList.add('speed-bar-glow');
        setTimeout(() => this.speedBar.classList.remove('speed-bar-glow'), 300);
    }

    handleMistakes(e) {
        const input = this.inputElement.value;
        const words = Array.from(this.fallingWordsContainer.children);
    
        if (e.key.length === 1 && e.key !== 'Backspace') {
            let isMistake = true;
            for (let word of words) {
                if (word.textContent.startsWith(input + e.key)) {
                    isMistake = false;
                    break;
                }
            }
            if (isMistake && input.length > 0) {
                if (this.currentLevel !== 9) {
                    e.preventDefault(); // Ngăn ký tự sai được thêm vào ô nhập liệu
                    this.mistakes++;
                    this.inputElement.value = ''; // Xóa toàn bộ nội dung
                    this.mistakesDisplay.textContent = this.mistakes;
                }
                
                GameUtils.playSound('error');
                if (this.mistakes >= 10) {
                    this.gameOver('Bạn đã sai quá 10 lần!'); // Sửa thông báo cho khớp với điều kiện
                }
            }
        }
    }

    startCountdown() {
        this.timer = setInterval(() => {
            this.timerValue--;
            this.timerDisplay.textContent = this.timerValue;

            if (this.timerValue <= 0) {
                clearInterval(this.timer);
                clearInterval(this.fallingWordsInterval);
                this.levelComplete();
            }
        }, 1000);
    }

    levelComplete() {
        clearInterval(this.fallingWordsInterval);
        clearInterval(this.timer);
        
        if (this.currentLevel < this.LEVELS.length - 1) {
            this.showLevelCompleteScreen();
        } else {
            this.gameOver('Chúc mừng! Bạn đã hoàn thành tất cả các cấp độ!');
        }
    }

    showLevelCompleteScreen() {
        // Tạo màn hình hoàn thành cấp độ
        const levelCompleteScreen = document.createElement('div');
        levelCompleteScreen.className = 'absolute inset-0 bg-green-500 bg-opacity-80 flex items-center justify-center flex-col text-white';
        levelCompleteScreen.innerHTML = `
            <h2 class="text-3xl mb-4">Hoàn Thành Cấp Độ ${this.currentLevel === 0 ? 'Làm Quen' : this.currentLevel + 1}!</h2>
            <div class="flex space-x-4 mt-6">
                <button id="next-level-btn" class="bg-white text-green-500 px-6 py-3 rounded-lg hover:bg-green-100">
                    Tiếp Theo
                </button>
                <button id="level-close-btn" class="bg-white text-red-500 px-6 py-3 rounded-lg hover:bg-red-100">
                    Đóng
                </button>
            </div>
        `;
        
        // Thêm vào gameArea
        this.gameArea.appendChild(levelCompleteScreen);
        
        // Gắn sự kiện cho các nút
        const nextBtn = levelCompleteScreen.querySelector('#next-level-btn');
        const closeBtn = levelCompleteScreen.querySelector('#level-close-btn');
        
        nextBtn.addEventListener('click', () => {
            this.nextLevel(levelCompleteScreen); // Truyền tham chiếu đến màn hình để xóa
        });
        
        closeBtn.addEventListener('click', () => {
            this.closeGame();
            levelCompleteScreen.remove(); // Xóa màn hình khi đóng
        });
    }
    
    nextLevel(levelCompleteScreen) {
        // Kiểm tra xem cấp độ hiện tại có nhỏ hơn tổng số cấp độ không
        if (this.currentLevel < this.LEVELS.length - 1) {
            this.currentLevel++; // Chuyển sang cấp độ tiếp theo
            levelCompleteScreen.remove(); // Xóa màn hình hoàn thành cấp độ
            this.setupLevel(); // Thiết lập cấp độ mới
        } else {
            // Nếu đã ở cấp độ cuối cùng, hiển thị thông báo hoàn thành
            levelCompleteScreen.remove(); // Xóa màn hình trước khi hiển thị game over
            this.gameOver('Chúc mừng! Bạn đã hoàn thành tất cả các cấp độ!');
        }
    }

    startTestMode() {
        this.mistakes = 0;
        this.mistakesDisplay.textContent = '0';
        this.levelDisplay.textContent = 'Test Speed';
        
        // Bọc từng ký tự trong <span>
        const wrappedText = this.TEST_PARAGRAPH.split('').map((char, index) => {
            return `<span id="char-${index}" class="test-char">${char}</span>`;
        }).join('');
        this.fallingWordsContainer.innerHTML = `<div class="text-center text-xl text-gray-700 p-4">${wrappedText}</div>`;
        
        this.inputElement.value = '';
        this.inputElement.focus();
        
        this.timerValue = parseInt(this.timeSelect.value);
        this.timerDisplay.textContent = this.timerValue;
        this.correctWords = 0; // Sẽ đếm từ đúng dựa trên ký tự hoàn thành từ
        this.timerStarted = false;
        this.startTime = null;
        
        this.inputElement.removeEventListener('input', this.handleTestInput.bind(this));
        this.inputElement.addEventListener('input', this.handleTestInput.bind(this));
        
        this.timerDisplay.classList.add('text-red-500');
        setTimeout(() => this.timerDisplay.classList.remove('text-red-500'), 1000);
        GameUtils.playSound('start');
    }
    
    startTestCountdown() {
        if (this.timerStarted) return; // Tránh chạy lại nếu đã bắt đầu
    
        this.testStartTime = Date.now();
        this.timerStarted = true;
    
        this.timer = setInterval(() => {
            this.timerValue--;
            this.timerDisplay.textContent = this.timerValue;
    
            if (this.timerValue <= 0) {
                clearInterval(this.timer);
                this.calculateTestSpeed();
            }
        }, 1000);
    }

    handleTestInput(e) {
        if (this.currentLevel === 9) {
            const input = e.target.value;
            const paragraphChars = this.TEST_PARAGRAPH.split('');
            const typedChars = input.split('');
    
        
            if (!this.timerStarted && input.length > 0) {
                this.startTestCountdown();
                this.startTime = Date.now();
            }
            
            // Cập nhật hiệu ứng và đếm lỗi cho từng ký tự
            paragraphChars.forEach((char, index) => {
                const charElement = document.getElementById(`char-${index}`);
                if (index < typedChars.length) {
                    if (typedChars[index] === char) {
                        charElement.classList.add('completed');
                        charElement.classList.remove('error');
                    } else {
                        charElement.classList.remove('completed');
                        charElement.classList.add('error');
                        if (!this.currentMistakes.includes(index)) {
                            this.currentMistakes.push(index);
                            this.mistakes = this.currentMistakes.length;
                            GameUtils.playSound('error');
                        }
                    }
                } else {
                    // Reset trạng thái cho các ký tự chưa gõ tới
                    charElement.classList.remove('completed', 'error');
                }
            });
        
            this.mistakesDisplay.textContent = this.currentMistakes.length;
        
            // Đếm từ đúng khi hoàn thành từ
            const paragraphWords = this.TEST_PARAGRAPH.split(' ');
            const typedWords = input.trim().split(' ').filter(word => word.length > 0);
            if (typedWords.length > 0) {
                const lastTypedWord = typedWords[typedWords.length - 1];
                const expectedWord = paragraphWords[typedWords.length - 1];
                if (lastTypedWord === expectedWord && e.data === ' ' && !this[`word-${typedWords.length - 1}-counted`]) {
                    this.correctWords++;
                    this.correctWordsCount++;
                    this[`word-${typedWords.length - 1}-counted`] = true;
                    GameUtils.playSound('correct');
                    this.updateSpeed(lastTypedWord);
                }
            }
        
            // Kiểm tra hoàn thành toàn bộ đoạn văn
            if (input === this.TEST_PARAGRAPH) {
                clearInterval(this.timer);
                this.calculateTestSpeed();
            }
        }

    }

    calculateTestSpeed() {
        const elapsedTime = (Date.now() - this.testStartTime) / 1000 / 60; // Minutes
        const wpm = Math.round(this.correctWords / elapsedTime);
        this.showTestResult(wpm);
        this.inputElement.removeEventListener('input', this.handleTestInput.bind(this));
    }

    showTestResult(wpm) {
        this.gameArea.classList.add('hidden');
        this.gameOverScreen.classList.remove('hidden');
        document.getElementById('game-over-title').textContent = 'Kết Quả Test Speed';
        document.getElementById('game-over-message').textContent = `Tốc độ gõ của bạn: ${wpm} từ/phút`;
        
        const restartBtn = document.getElementById('restart-btn');
        const closeBtn = document.getElementById('close-btn');
        
        restartBtn.classList.remove('hidden'); // Đảm bảo nút Restart luôn hiển thị
        restartBtn.textContent = 'Chơi Lại';
        closeBtn.textContent = 'Đóng';
        closeBtn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        closeBtn.classList.add('bg-red-500', 'hover:bg-red-600');
    }

    restartVariables() {
        // Thiết lập lại các biến
        this.timerStarted = false;
        this.correctWords = 0;
        this.correctWordsCount = 0;
        this.startTime = null;
        this.mistakes = 0;
        this.activeWords = [];
        this.speedBar.style.width = '0%';
        this.speedDisplay.textContent = '0';
        this.currentMistakes = [];
    }

    gameOver(message) {
        clearInterval(this.fallingWordsInterval);
        clearInterval(this.timer);
        
        document.getElementById('game-over-title').textContent = 'Trò Chơi Kết Thúc';
        document.getElementById('game-over-message').textContent = message;
        
        this.gameArea.classList.add('hidden');
        this.gameOverScreen.classList.remove('hidden');
        
        const restartBtn = document.getElementById('restart-btn');
        const closeBtn = document.getElementById('close-btn');
        restartBtn.classList.remove('hidden');
        closeBtn.textContent = 'Đóng';
        closeBtn.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        closeBtn.classList.add('bg-red-500', 'hover:bg-red-600');
        this.restartVariables();
    }

    restartGame() {
        // Dọn dẹp trạng thái cũ
        clearInterval(this.timer);
        clearInterval(this.fallingWordsInterval);
        this.inputElement.removeEventListener('input', this.handleTestInput);
        this.inputElement.removeEventListener('input', this.handleInput);
        
        this.gameOverScreen.classList.add('hidden');
        this.gameArea.classList.remove('hidden');
        
        this.restartVariables();
        
        // Xóa các biến đếm từ tạm thời
        const paragraphWords = this.TEST_PARAGRAPH.split(' ');
        paragraphWords.forEach((_, index) => delete this[`word-${index}-counted`]);
        
        // Re-bind the regular input handler
        this.inputElement.addEventListener('input', (e) => this.handleInput(e));
        
        // Khởi động lại tùy theo chế độ
        if (this.currentLevel === this.LEVELS.length) { // Speed Test mode (value 9)
            this.startTestMode();
        } else {
            this.setupLevel();
        }
    }
    
    closeGame() {
        this.gameOverScreen.classList.add('hidden');
        this.startScreen.classList.remove('hidden'); // Chỉ quay về menu
    }

    returnToMenu() {
        clearInterval(this.fallingWordsInterval);
        clearInterval(this.timer);
        this.gameArea.classList.add('hidden');
        this.startScreen.classList.remove('hidden');
    }

    showKeyboardHint(word) {
        // Xóa các highlight cũ
        const allKeys = document.querySelectorAll('#keyboard-svg rect');
        allKeys.forEach(key => key.classList.remove('highlighted'));
    
        // Lấy tất cả các ký tự trong từ và làm sáng các phím tương ứng
        word.toLowerCase().split('').forEach(char => {
            // Tìm phần tử <text> trong SVG chứa ký tự
            const textElement = Array.from(document.querySelectorAll('#keyboard-svg text'))
                .find(text => text.textContent.toLowerCase() === char);
            
            if (textElement) {
                // Tìm phần tử <rect> cha gần nhất của <text>
                const rectElement = textElement.previousElementSibling;
                if (rectElement && rectElement.tagName === 'rect') {
                    rectElement.classList.add('highlighted');
                }
            }
        });
    }

    getKeyPositions(word) {
        const keyMap = {
            // Hàng số
            '`': { x: 60, y: 110, width: 50, height: 50, hand: 'left' },
            '1': { x: 120, y: 110, width: 50, height: 50, hand: 'left' },
            '2': { x: 180, y: 110, width: 50, height: 50, hand: 'left' },
            '3': { x: 240, y: 110, width: 50, height: 50, hand: 'left' },
            '4': { x: 300, y: 110, width: 50, height: 50, hand: 'left' },
            '5': { x: 360, y: 110, width: 50, height: 50, hand: 'left' },
            '6': { x: 420, y: 110, width: 50, height: 50, hand: 'right' },
            '7': { x: 480, y: 110, width: 50, height: 50, hand: 'right' },
            '8': { x: 540, y: 110, width: 50, height: 50, hand: 'right' },
            '9': { x: 600, y: 110, width: 50, height: 50, hand: 'right' },
            '0': { x: 660, y: 110, width: 50, height: 50, hand: 'right' },
            '-': { x: 720, y: 110, width: 50, height: 50, hand: 'right' },
            '=': { x: 780, y: 110, width: 50, height: 50, hand: 'right' },
            // Hàng QWERTY
            'q': { x: 150, y: 170, width: 50, height: 50, hand: 'left' },
            'w': { x: 210, y: 170, width: 50, height: 50, hand: 'left' },
            'e': { x: 270, y: 170, width: 50, height: 50, hand: 'left' },
            'r': { x: 330, y: 170, width: 50, height: 50, hand: 'left' },
            't': { x: 390, y: 170, width: 50, height: 50, hand: 'left' },
            'y': { x: 450, y: 170, width: 50, height: 50, hand: 'right' },
            'u': { x: 510, y: 170, width: 50, height: 50, hand: 'right' },
            'i': { x: 570, y: 170, width: 50, height: 50, hand: 'right' },
            'o': { x: 630, y: 170, width: 50, height: 50, hand: 'right' },
            'p': { x: 690, y: 170, width: 50, height: 50, hand: 'right' },
            '[': { x: 750, y: 170, width: 50, height: 50, hand: 'right' },
            ']': { x: 810, y: 170, width: 50, height: 50, hand: 'right' },
            '\\': { x: 870, y: 170, width: 50, height: 50, hand: 'right' },
            // Hàng ASDF
            'a': { x: 170, y: 230, width: 50, height: 50, hand: 'left' },
            's': { x: 230, y: 230, width: 50, height: 50, hand: 'left' },
            'd': { x: 290, y: 230, width: 50, height: 50, hand: 'left' },
            'f': { x: 350, y: 230, width: 50, height: 50, hand: 'left' },
            'g': { x: 410, y: 230, width: 50, height: 50, hand: 'left' },
            'h': { x: 470, y: 230, width: 50, height: 50, hand: 'right' },
            'j': { x: 530, y: 230, width: 50, height: 50, hand: 'right' },
            'k': { x: 590, y: 230, width: 50, height: 50, hand: 'right' },
            'l': { x: 650, y: 230, width: 50, height: 50, hand: 'right' },
            ';': { x: 710, y: 230, width: 50, height: 50, hand: 'right' },
            "'": { x: 770, y: 230, width: 50, height: 50, hand: 'right' },
            // Hàng Shift
            'z': { x: 200, y: 290, width: 50, height: 50, hand: 'left' },
            'x': { x: 260, y: 290, width: 50, height: 50, hand: 'left' },
            'c': { x: 320, y: 290, width: 50, height: 50, hand: 'left' },
            'v': { x: 380, y: 290, width: 50, height: 50, hand: 'left' },
            'b': { x: 440, y: 290, width: 50, height: 50, hand: 'right' },
            'n': { x: 500, y: 290, width: 50, height: 50, hand: 'right' },
            'm': { x: 560, y: 290, width: 50, height: 50, hand: 'right' },
            ',': { x: 620, y: 290, width: 50, height: 50, hand: 'right' },
            '.': { x: 680, y: 290, width: 50, height: 50, hand: 'right' },
            '/': { x: 740, y: 290, width: 50, height: 50, hand: 'right' },
            // Thanh Space
            ' ': { x: 250, y: 350, width: 400, height: 50, hand: 'right' }
        };

        return word.toLowerCase().split('').map(char => {
            const pos = keyMap[char];
            return pos ? { ...pos, key: char } : null;
        }).filter(Boolean);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TypingGame();
});

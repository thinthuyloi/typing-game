class GameUtils {
    static getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    static createWordElement(word, containerWidth, activeWords) {
        const wordElement = document.createElement('div');
        wordElement.textContent = word;
        wordElement.classList.add('falling-word');
        wordElement.style.top = '0px';

        const minGap = 10;
        const wordWidth = word.length * 20 + 40;
        const maxAttempts = 10;
        let attempts = 0;
        let leftPos;

        do {
            leftPos = Math.random() * (containerWidth - wordWidth);
            attempts++;
            if (attempts >= maxAttempts) {
                return null;
            }
        } while (this.isOverlapping(leftPos, wordWidth, activeWords, minGap));

        wordElement.style.left = `${leftPos}px`;
        return wordElement;
    }

    static isOverlapping(newLeft, newWidth, activeWords, minGap) {
        for (const word of activeWords) {
            const wordLeft = word.left;
            const wordRight = wordLeft + word.width;
            const newRight = newLeft + newWidth;

            if (newLeft < wordRight + minGap && newRight > wordLeft - minGap) {
                return true;
            }
        }
        return false;
    }

    static playSound(type) {
        switch(type) {
            case 'warning':
                // Thêm âm thanh cảnh báo ở đây
                break;
            // Các âm thanh khác như cũ
        }
    }
}
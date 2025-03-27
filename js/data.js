var words_1 = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'x', 'y', 'z'
]
var words_2 = ["an", "as", "at", "be", "by", "do", "go", "he", "hi", "if", "in", "is", "it", "me", "no", "of", "on", "or", "so", "to", "up", "us"];
var words_3 = [
    "cat", "dog", "bat", "rat", "hat", "mat", "car", "bar", "far", "jar",
    "run", "fun", "sun", "gun", "pen", "ten", "men", "hen", "pin", "win",
    "box", "fox", "lox", "toy", "boy", "joy", "day", "say", "way", "pay",
    "red", "bed", "fed", "led", "big", "dig", "fig", "pig", "wig", "zip",
    "add", "bad", "dad", "mad", "sad", "top", "hop", "mop", "pop", "sop",
    "cut", "gut", "nut", "put", "bit", "fit", "hit", "kit", "sit", "tip",
    "ask", "bus", "cup", "dip", "eat", "fan", "gap", "ham", "ice", "jam",
    "key", "law", "map", "net", "odd", "old", "own", "pad", "raw", "sea",
    "tea", "use", "van", "war", "yes", "zoo", "arm", "bet", "cry", "dry",
    "eye", "fly", "get", "hot", "ink", "lip", "mix", "new", "off", "one",
    "out", "pat", "pet", "pot", "rid", "rob", "rod", "rot", "rug", "set",
    "shy", "sip", "sky", "son", "tan", "tap", "tar", "tie", "tin", "ton",
    "try", "two", "vet", "web", "wet", "who", "why", "yet", "air", "ant",
    "ape", "arc", "art", "bag", "ban", "beg", "bin", "bow", "bud", "bun",
    "cap", "cob", "cod", "cog", "con", "cop", "cow", "dam", "den", "dew",
    "dim", "doe", "dot", "due", "dug", "dye", "ear", "egg", "elm", "end",
    "eve", "fad", "fee", "few", "fin", "fir", "fix", "foe", "fog", "fur",
    "gal", "gas", "gel", "gem", "gin", "got", "gum", "hag", "hem", "her",
    "hid", "him", "hip", "his", "hoe", "hog", "hub", "hue", "hug", "hum",
    "hut", "ill", "ion", "ivy", "jab", "jag", "jog", "jot", "jug", "kin",
    "lad", "lag", "lap", "lay", "leg", "let", "lid", "lie", "log", "lot",
    "low", "lug", "man", "mar", "met", "mid", "mob", "mud", "mug", "nag",
    "nap", "nod", "nor", "not", "now", "oak", "oar", "oat", "oil", "opt",
    "orb", "ore", "our", "owl", "pan", "par", "paw", "pea", "peg", "per",
    "pie", "pit", "ply", "pod", "pro", "pub", "pup", "rag", "ram", "ran",
    "ray", "rib", "rig", "rim", "rip", "row", "rub", "rue", "rum", "rut",
    "sap", "saw", "sew", "she", "sin", "sir", "six", "ski", "sly", "sod",
    "spa", "spy", "sub", "sue", "sum", "tab", "tag", "tax", "the", "toe",
    "too", "tub", "tug", "urn", "wad", "wag", "was", "wax", "woe", "won",
    "yap", "yea", "yen", "you", "zap", "zen"
]
var words_4_to_6 = [
    "apple", "bread", "chair", "table", "house", "water", "river", "stone", "cloud", "forest",
    "smile", "laugh", "dance", "music", "piano", "guitar", "violin", "drums", "singer", "stage",
    "light", "shadow", "dream", "sleep", "awake", "think", "learn", "teach", "study", "books",
    "paper", "write", "paint", "color", "brush", "canvas", "sculpt", "stone", "metal", "glass",
    "earth", "planet", "stars", "galaxy", "space", "rocket", "orbit", "moon", "solar", "comet",
    "ocean", "waves", "beach", "sandy", "shell", "coral", "fishy", "shark", "whale", "dolphin",
    "tiger", "lion", "bear", "wolf", "deer", "eagle", "hawk", "owl", "snake", "spider",
    "horse", "camel", "zebra", "goat", "sheep", "chicken", "rooster", "duck", "goose", "turkey",
    "fruit", "grape", "lemon", "orange", "berry", "peach", "plum", "mango", "cherry", "apple",
    "bread", "cheese", "pizza", "pasta", "salad", "soup", "steak", "fries", "cake", "cookie",
    "sugar", "honey", "spice", "sauce", "juice", "coffee", "teacup", "milk", "cream", "butter",
    "shirt", "pants", "shoes", "socks", "jacket", "sweater", "scarf", "gloves", "hat", "belt",
    "watch", "clock", "phone", "laptop", "screen", "mouse", "keyboard", "cable", "power", "radio",
    "travel", "plane", "train", "bus", "car", "bike", "road", "path", "bridge", "tunnel",
    "city", "town", "village", "street", "park", "garden", "fountain", "statue", "bench", "lamp",
    "money", "coin", "bill", "wallet", "bank", "card", "cash", "check", "price", "trade",
    "work", "job", "office", "desk", "chair", "file", "paper", "pen", "note", "meeting",
    "play", "game", "sport", "ball", "team", "goal", "score", "run", "jump", "swim",
    "love", "hate", "fear", "hope", "trust", "faith", "peace", "anger", "joy", "sadness",
    "time", "hour", "minute", "second", "day", "week", "month", "year", "season", "clock",
    "north", "south", "east", "west", "map", "compass", "guide", "trail", "mountain", "valley",
    "rain", "snow", "wind", "storm", "thunder", "lightning", "fog", "mist", "sunny", "cloudy",
    "cold", "warm", "hot", "cool", "freeze", "melt", "burn", "glow", "shine", "dark",
    "blue", "green", "yellow", "red", "purple", "pink", "black", "white", "gray", "brown",
    "fast", "slow", "quick", "speed", "rush", "calm", "quiet", "loud", "soft", "hard",
    "big", "small", "tall", "short", "wide", "narrow", "long", "tiny", "huge", "little",
    "good", "bad", "great", "poor", "rich", "happy", "sad", "angry", "kind", "mean",
    "open", "close", "start", "stop", "begin", "end", "rise", "fall", "lift", "drop",
    "push", "pull", "throw", "catch", "hold", "break", "fix", "build", "create", "destroy",
    "find", "lose", "search", "hide", "show", "tell", "ask", "answer", "call", "wait",
    "walk", "run", "jump", "climb", "crawl", "fly", "drive", "ride", "sail", "swim",
    "food", "drink", "taste", "smell", "touch", "hear", "see", "look", "watch", "listen",
    "life", "death", "birth", "grow", "age", "change", "move", "stay", "leave", "return"
]

var words_8_or_more = [
    "beautiful", "adventure", "delicious", "treasure", "knowledge", "fantastic", "discovery", "inspiring",
    "challenge", "mountains", "education", "wonderful", "celebrate", "friendship", "dangerous", "impossible",
    "landscape", "mysterious", "technology", "brilliant", "happiness", "creativity", "experience", "dedication",
    "wilderness", "invention", "motivation", "spectacular", "confidence", "imagination", "exploration", "tradition",
    "leadership", "photograph", "incredible", "performance", "achievement", "scientist", "understood", "revolution",
    "attention", "collection", "community", "condition", "conversation", "development", "direction", "electricity",
    "emergency", "equipment", "excellent", "government", "important", "improvement", "influence", "information",
    "inspection", "instruction", "intelligence", "interesting", "investment", "management", "marketing", "measurement",
    "membership", "necessary", "operation", "opportunity", "organization", "ownership", "participate", "passenger",
    "personality", "population", "practical", "preparation", "presentation", "production", "protection", "relationship",
    "researcher", "resolution", "restaurant", "selection", "situation", "statement", "strengthen", "successful",
    "suggestion", "suspicious", "television", "temporary", "territory", "traditionally", "transport", "understanding",
    "volunteer", "yesterday", "accomplish", "adjustment", "advertising", "agriculture", "anniversary", "appearance",
    "appreciate", "architect", "assignment", "assistance", "authority", "background", "basketball", "beginning",
    "breakfast", "butterfly", "candidate", "carefully", "character", "chemistry", "childhood", "chocolate",
    "cigarette", "classroom", "comfortable", "committee", "competition", "complicated", "computers", "conclusion",
    "connection", "conscious", "consideration", "construction", "continent", "contractor", "controversy", "convenient",
    "cooperation", "countryside", "criticism", "curiosity", "customers", "decoration", "dedicated", "definition",
    "democracy", "department", "dependent", "depression", "description", "desperate", "determine", "different",
    "difficult", "dimension", "disappear", "disappoint", "discipline", "discussion", "distribute", "documentary",
    "economics", "effective", "efficient", "elementary", "embarrass", "emotional", "encourage", "engineer",
    "entertain", "environment", "essential", "everybody", "evolution", "examination", "exception", "exciting",
    "executive", "exhausted", "expensive", "expertise", "explaining", "expression", "extension", "extensive",
    "familiar", "favorites", "financial", "fireplace", "following", "forgotten", "foundation", "furniture",
    "gathering", "generous", "gradually", "grandfather", "grandmother", "guarantee", "halloween", "handwriting",
    "headquarters", "healthcare", "highlight", "historical", "hopefully", "household", "identical", "ignorance",
    "illustrate", "immediate", "immigrant", "implement", "incentive", "including", "incorrect", "independence",
    "individual", "industrial", "infection", "inflation", "initiative", "institute", "insurance", "integrity",
    "intention", "interface", "interfere", "interview", "introduce", "invention", "invisible", "irrigation",
    "judgement", "knowledgeable", "laboratory", "languages", "legislation", "librarian", "listening", "literature",
    "machinery", "mainstream", "maintains", "manufacturing", "marvelous", "materials", "mathematics", "mechanical",
    "memorable", "microwave", "minority", "miraculous", "misunderstanding", "monument", "motorcycle", "musician",
    "naturally", "neighborhood", "newspaper", "nutrition", "objective", "observing", "obviously", "occasion",
    "offensive", "operating", "opposition", "optimistic", "orchestra", "originally", "packaging", "painfully",
    "paragraph", "parliament", "particular", "passionate", "pavements", "penicillin", "perfection", "permanent",
    "philosophy", "physical", "placement", "playground", "pleasantly", "political", "pollution", "portfolio",
    "potential", "pregnancy", "president", "privilege", "procedure", "professor", "promotion", "publisher",
    "punishment", "purchasing", "qualified", "questionnaire", "realistic", "reception", "recognize", "recommend",
    "recording", "reduction", "reference", "reflection", "refreshing", "regularly", "rejection", "religious",
    "remarkable", "reputation", "requirement", "residence", "resources", "retirement", "satellite", "satisfied",
    "scattered", "scientists", "sculpture", "secretary", "sensitive", "separation", "signature", "similarly",
    "sincerely", "sophisticated", "specialist", "spiritual", "spotlight", "stability", "strategic", "structure",
    "submarine", "substance", "summarize", "sunflower", "supermarket", "surprised", "surrender", "suspense",
    "symphony", "technical", "telephone", "telescope", "terminate", "testimony", "theoretical", "tournament",
    "translate", "treatment", "tremendous", "typically", "unbelievable", "uncertain", "uncomfortable", "unlimited",
    "vacation", "vegetable", "viewpoint", "voluntary", "warehouse", "waterfall", "weaknesses", "wildlife",
    "workplace", "worldwide"
]

var data = `
What is Social Development?
Social Development encompasses a commitment to individual and societal well-being, and the opportunity for citizens to determine their own and their society’s needs and to influence decisions that affect these. Social change incorporates public concerns in developing social policy and economic initiatives.
Until relatively recently, social development was conceived in terms of a set of desirable results - higher incomes, longer life expectancy, lower infant mortality, more and better education etc. Recently emphasis has shifted from the results to the enabling conditions, strategies and public policies for achieving those results. But still little attention has been placed on the underlying social process of development that determines how society formulates, adopts, initiates, and organies; and few attempts have been made to formulate such a framework. However, there are some recognized theories and principles, which will be examined briefly.
Key Social Development Principles
Social development is defined in the broadest social terms as an upward directional movement of society from lesser to greater levels of energy, efficiency, quality, productivity, complexity, comprehension, creativity, choice, mastery, enjoyment and accomplishment. Growth and development usually go together, but they are different phenomena subject to different laws. Growth involves an expansion of existing types and forms of activities. Development involves a qualitative enhancement. Social development is driven by the subconscious aspirations of society for advancement or progress. Society (and individuals) will seek the progressive fulfillment of a prioritized hierarchy of needs.
Motivation is complex and highly individual. The motivation to work can be physical (earning money for food or shelter), psychological (seeking social satisfaction or security) or more unconscious and instinctive – which applies particularly to altruistic and self-fulfillment reasons. One of the most popular theories explaining motivation is Maslow’s ‘hierarchy of needs’, which categorizes human motivations as follows:
The theory works on the basis that needs are only motivators when they are unsatisfied. The lower order needs (physiology and safety) are dominant until satisfied, when the higher needs come into being.
This theory is important in terms of social development theory, as it helps to explain why more altruistic concerns (such as animal welfare activity) are often not burning social issues until society has developed to a level that meets individuals’ lower order needs (personal, shelter, security etc.).
As can be seen, in the course of social development, society is moved by a range of different psychological motives. Self actualizing motives (wanting self-development and social progress for altruistic and ethical reasons) are normally the last to be fulfilled. However, the globalization of culture and information is bringing such concerns more rapidly into public consciousness. The revolution of rising expectations represents a new and more powerful motivating force for development; which by its nature is not limited, as all the others have been, to a specific class or section of society.
Development of society occurs only in fields where the collective will is sufficiently strong and seeking expression. Development strategies will be most effective when they focus on identifying areas where the social will is mature and can provide better means for the awakened social energy to express itself. Only those initiatives that are in concordance with this subconscious urge will be likely to succeed and gain ‘critical-mass’.
Every society possesses a huge reservoir of potential human energy that is absorbed and held static in its organized foundations - its cultural values, physical security, social beliefs, and political structures. At times of transition, crisis, and opportunities, those energies are released and expressed in action. Policies, strategies, and programs that tap this latent energy and channel it into constructive activities can stir an entire nation to action and rapid advancement.
The theory of critical mass was expounded by Nobel Prize winner Thomas Schelling (back in 1969-1971), and is explained in further detail in a new book of his ‘Game Theory’ by Dodge (2012). It is also known as the ‘bandwagon effect’. The success or failure of many things is determined by whether ‘critical mass’ is achieved; so increasing numbers are encouraged to join movements as they gain attention and impact. Schelling also introduced the concept of the ‘tipping point’, which is the exact point at which a movement becomes self-sustaining.
[Take the example of the ‘Arab Spring’ in 2011 – what seemed like a sudden and spontaneous wave of protests actually had its roots in revolts dating back to the 1800s. The catalyst for the current escalation of protests was when a Tunisian set himself alight and died as a protest. This brought various disaffected groups together, forming the Tunisian Revolution.]
However, social change requires an enormous investment of energy to break existing patterns of social behavior and form new ones. Change is triggered when societal energies accumulate beyond the level required for functioning at the present level. The social energy may be released in response to the opening up of a new opportunity or confrontation by a severe challenge. Where different cultures meet and blend, explosive energies for social evolution are released.
The rate and extent of development is determined by prevalent social attitudes, which control the flow of social energies. Where attitudes are not conducive, development strategies will not yield results. In this case the emphasis should be placed on strategies to bring about a change in societal attitudes - such as public education and awareness, demonstration, and encouragement of successful pioneers.
The implications of this for the animal welfare movement can be that if the ‘time is not ripe’ for the animal movement to ‘take off’ as a social movement in its own right in certain countries, then tapping into other burgeoning social change concerns may be necessary (whilst always building the capacity, models, awareness and moral force needed to grow the animal welfare movement).
Bringing About Social Change
There are various social change models. These all require public awareness and learning, and consensus building (building critical mass), before policy change can effectively be implemented and enforced. Section 3 of this module covers social movement frameworks, which explain the (various) programs of social change movements to bring about such change.
We found the following social change model applicable and relevant to animal welfare. It is a model of the stages needed to institutionalize social change:
Official structures – the development of departments or individuals dealing with the issue (when there is a need to put the issue on the agenda)
Legislation – when the need for official policy change is accepted
Enforcement – when the authorities accept the need to enforce change
Transmission by education – when it is accepted that this needs to be an issue for society
Cultural transmission by family – when the issue is generally accepted, and grassroots education takes place within families
The last two stages can be grouped together as ‘public awareness and support’, which is a long-term process beginning with education and ending with final acceptance in the family unit.
It is important to remember that social change does not occur until all stages of the social change model have been accomplished. It is a common mistake to view policy change in terms of obtaining policies/laws alone, without considering the structures and enforcement needed to implement these. A policy or law is not worth the paper it is written on if it is not put into practical effect. In fact, policy change objectives may be seen as an intermediate aim, with change in practice being the end point that brings real improvements in the situation of the animals.
The problem for various social change movements is how to press their movement’s concerns up the ladder of people’s own ‘hierarchy of needs’. That is: ‘how to make the issue become a priority to people?’ This is a real problem for animal welfare, as the suffering does not impact directly upon individual humans (i.e. it is not a personal problem, and requires altruism and empathy to be considered important). Increased awareness can accelerate this process. But to become a burning issue, there needs to be emotional engagement, intellectual challenge, and/or a real sense of justice (a strong ethical perspective).
The process of discovery expands human consciousness. The process of application enhances social organization.
This explains why ‘best practice pilot projects’ are important – as they are a practical demonstration of how positive change can take place (and both national and international ‘best practice’ case studies can be used). It also explains why capacity building is necessary – providing not only necessary skills, but also the mindset that positive change is achievable.
Development occurs when pioneering individual initiatives are imitated by others, multiplied and actively supported by the society. Society then actively organizes the new activity by establishing supportive laws, systems and institutions. At the next stage, it integrates the new activity with other fields of activity and assimilates it into its educational system. The activity has become fully assimilated as part of the culture when it is passed on to the next generation as values through the family.
There are various causes of social change. Culture can be a cause, and there are said to be three main sources of cultural change:
The first source is invention. Inventions produce new products, ideas, and social patterns. The invention of rocket propulsion led to space travel, which in the future may lead to inhabitation of other planets.
The second source is discovery. Discovery is finding something that has never been found before, or finding something new in something that already exists.
The third source is diffusion. Diffusion is the spreading of ideas and objects to other societies. This would involve trading, migration, and mass communication.
The ‘mass media’ is a vital factor in the speed of social change. It permits rapid diffusion of ideas, by delivering these in the private and relaxing environs of the home, where audiences are at their most susceptible.
The Role of Civil Society
Social development takes place within a larger evolutionary context. Social learning is a subconscious seeking (for ethics and values, or even reason and purpose) that ultimately leads to conscious knowledge. We experience first and understand later. Our mental comprehension perpetually lags behind physical experience and struggles to catch up with it. But as society advances, development becomes more conscious and more rapid.
Social movements can also play a pivotal role in promoting change. Civil society or civil institutions refer to the totality of voluntary civic and social organizations or institutions that form the basis of a functioning society as opposed to the force backed structures of a state (regardless of that state's political system).
While there are myriad definitions of civil society, the London School of Economics Centre for Civil Society working definition is illustrative:
“Civil society refers to the arena of un-coerced collective action around shared interests, purposes, and values. In theory, its institutional forms are distinct from those of the state, family, and market, though in practice, the boundaries between state, civil society, family, and market are often complex, blurred and negotiated. Civil society commonly embraces a diversity of spaces, actors, and institutional forms, varying in their degree of formality, autonomy, and power. Civil societies are often populated by organizations such as registered charities, development non-governmental organizations, community groups, women's organizations, faith-based organizations, professional associations, trades unions, self-help groups, social movements, business associations, coalitions and advocacy group.”
Civil society organizations, particularly those in the social change sector, are strong proponents of the public sphere, and frequently make public policy discussion and public education major parts of their missions. They seek to effect change through dialogue with others sharing an interest in a social concern. In recent years, the rise of the new communications technologies and the Internet has had a significant effect on public sphere communications. The rapid evolution of the Internet has led many civil society organizations to adopt different software tools and information dissemination techniques to enhance their strategic effectiveness for social change.
Role of the Individual in Social Change
Society has no direct means to give conscious expression to its subconscious collective aspirations and urges. That essential role is played by pioneering conscious individuals - visionary intellectuals, political leaders, entrepreneurs, artists and spiritual seekers who are inspired to express and achieve what the collective subconsciously aspires to and is prepared for. Where the aspiration and action of the leader do not reflect the will of the collective, it is ignored or rejected. Where it gives expression to a deeply felt collective urge, it is endorsed, imitated, supported, and systematically propagated. This is most evident at times of war, social revolution, or communal conflict.
For example, India’s early freedom fighters consciously advocated the goal of freedom from British rule long before that goal had become a felt aspiration of the masses. The leaders spent decades urging a reluctant population to conceive of itself as a free nation and to aspire to achieve that dream. When finally the collective endorsed this conception, no foreign nation had the power to impose its will on the Indian people.
All human creative processes release and harness human energy and convert it into results. The process of skill formation involves acquiring mastery over our physical-nervous energies so that we can direct our physical movements in a precisely controlled manner. In the absence of skill, physical movements are clumsy, inefficient, and unproductive, like the stumbling efforts of a child learning to walk. Whilst the energies are the motivating force, it is strategic ability and professional skills that turn energy into effective action. Often the high emotions of social change movements are a facet of this undirected energy. Strategic advocacy helps to direct this energy, focusing it in directions where change can most effectively be triggered.
Development occurs when the subconscious preparedness of society leads to the generation of new ideas and conscious initiatives by individuals. The accumulated surplus energy of society releases the initiative of pioneers who apply new ideas, acquire new skills and introduce new types of activities. Imitation of successful pioneers eventually attracts the attention and overcomes the resistance of conservative forces in society, leading the society to accept and embrace the new activity.
The potentials for development always far exceed the initiative of society to exploit them. The actual achievements of society depend on the measure that it is ready to actively respond to new opportunities and challenges. That response is the real determinant of development. Three fundamental conditions determine a society’s level of preparedness: energy, awareness and aspiration.
Role of the Pioneer in Social Change
Social progress is stimulated by pioneering individuals who become conscious of new opportunities and initiate new behaviors and activities to take advantage of them. Pioneers are the lever or spearhead for collective advancement. Pioneers give conscious expression to the subconscious urges and readiness of society.
When society is subconsciously prepared for change, it still needs an agent through which to express this preparedness in action. In natural development, that is the role of pioneering individuals. Once society is prepared, sooner or later it gives rise to the initiative of one or more pioneering individuals who break out from the existing mold and attempt something new. Although exceptional and eccentric individuals may initiate new activities in any society, these activities usually disappear with the passing of their founder or give rise to isolated imitation that never acquires significant momentum. The social change pioneer is a conscious product of the society whose aspiration and initiative give expression to the subconscious aspiration of the society in which he lives.
Every new developmental activity is initially conceived and introduced by one or a few pioneers. The pioneer is one who sees, believes in and acts upon an opportunity that others fail to see or believe in; or lack the energy or courage to pursue. The pioneer exhibits a new understanding, new attitudes, new skills and behaviors different from those prevalent in the community at the time. If the pioneer’s initiative is in tune with the social aspiration and social preparedness, it inspires and encourages other dynamic individuals to imitate or improve upon the new initiative.
The role of the pioneer is vital to social change, because the next stage of social progress almost always remains unseen by the collective. It is the free thinking, far seeking individual who dares to imagine or conceive what the popular mind is unaware of and then translates that vague possibility into a reality that all can see. By acquiring one new or different attribute or behavior, he charts a new course and reveals a new possibility, all the time basing him or herself on the society’s present accomplishments and in most cases moving in a direction that the society has already indicated.
Max Weber thought that the expression of ideas by charismatic individuals could change the world. Here are some examples of influential people who caused changes in the world (good and bad): Martin Luther King, Jr.; Adolf Hitler; Mao Tseng Tug; Mohandas Gandhi & Nelson Mandela.
Multiplier Effect
It does not really matter whether pioneers come forward on their own internal prompting or in response to an opportunity or demonstration created by government. In either case, the individual embodies and represents the social initiative. What does matter is the response of the society to the pioneer. Often the early pioneer meets with a response of indifference, resistance, contempt or hostility from the community around him, especially when his actions represent a radical departure from the status quo. This usually occurs when the pioneer comes too much before his time, before society is fully ready to act on its urge for something new. At other times the successful pioneer is actively admired and respected, yet no one else comes forward to imitate his success. In either case, the pioneer’s initiative fails to catch on. If the pioneer pushes through change before the society is fully prepared, the change comes abruptly in the form of a revolution. If society is fully prepared to accept and follow the pioneer, then the change occurs by a smooth evolution. Revolution is premature evolution.
Under appropriate conditions, the success of the pioneer leads to active imitation by other adventurous individuals who in turn serve as models for still others to imitate. In this case, the initiative of the pioneer gets multiplied over and over, rippling through the society and unleashing a social change movement. Once the momentum has begun, there is no holding back the tide. We often see the situation where progress in one country takes a long while, then gradually other countries follow suit, then more and more follow.
The ‘100th monkey theory’ below is very interesting!
The 100th Monkey Theory
A story about social change
By Ken Keyes Jr.
The Japanese monkey, Macaca Fuscata, had been observed in the wild for a period of over 30 years.
In 1952, on the island of Koshima, scientists were providing monkeys with sweet potatoes dropped in the sand. The monkey liked the taste of the raw sweet potatoes, but they found the dirt unpleasant.
An 18-month-old female named Imo found she could solve the problem by washing the potatoes in a nearby stream. She taught this trick to her mother. Her playmates also learned this new way and they taught their mothers too.
Various monkeys gradually picked up this cultural innovation before the eyes of the scientists. Between 1952 and 1958 all the young monkeys learned to wash the sandy sweet potatoes to make them more palatable. Only the adults who imitated their children learned this social improvement. Other adults kept eating the dirty sweet potatoes.
Then something startling took place. In the autumn of 1958, a certain number of Koshima monkeys were washing sweet potatoes … the exact number is not known. Let us suppose that when the sun rose one morning there were 99 monkeys on Koshima Island who had learned to wash their sweet potatoes. Let's further suppose that later that morning, the hundredth monkey learned to wash potatoes. THEN IT HAPPENED!
By that evening almost everyone in the tribe was washing sweet potatoes before eating them. The added energy of this hundredth monkey somehow created an ideological breakthrough!
But there is more! A most surprising thing observed by these scientists was that the habit of washing sweet potatoes then jumped over the sea... Colonies of monkeys on other islands and the mainland troop of monkeys at Takasakiyama began washing their sweet potatoes.
Thus, when a certain critical number achieves awareness, this new awareness may be communicated from mind to mind.
Although the exact number may vary, this Hundredth Monkey Phenomenon means that when only a limited number of people know of a new way, it may remain the conscious property of these people.
But there is a point at which if only one more person tunes in to a new awareness, a field is strengthened so that this awareness is picked up by almost everyone!
Conclusion
Human development is a function of human awareness, aspirations, attitudes and values. Like all human creative processes, it is a process of self-conception. As the writer, artist, composer, political visionary and businessman conceive of unrealized possibilities and pour forth their creative energies to give expression to them, the social collective evolves a conception of what it wants to become and by expressing its creative energies through myriad forms of activity seeks to transform its conception into social reality.
Society is a subconscious living organism, which strives to survive, grow and develop. Individual members of society express conscious intention in their words and acts, but these are only surface expressions of deeper subconscious drives that move the society-at-large. The consciousness of a true collective organism is not merely the sum of its individual parts, but acquires its own identifiable character and personality.
This concept of social development holds very important implications for the future of humanity and the prospects for progress in the next century. It suggests that there are no inherent limits either to the speed or to the extent of the development process, other than those imposed by the limitations of our thought, knowledge, and aspirations. If we change our view, the character of this process can be transformed from the slow, trial and error subconscious process we have known in the past to a swift, sure leaping progress from height to greater height.
`
// Enhanced character response system
// This provides rich, contextual responses without needing API calls

class CharacterChat {
    constructor() {
        this.contextMemory = {};
        this.emotionalState = {};
        this.conversationFlow = {};
    }

    generateResponse(message, character, conversationHistory) {
        const context = this.analyzeContext(message, conversationHistory);
        const emotion = this.detectEmotion(message);
        const intent = this.detectIntent(message);
        
        // Get character-specific response generator
        const responseGenerator = this.getCharacterGenerator(character.name);
        
        // Generate contextual response
        return responseGenerator(message, context, emotion, intent, character);
    }

    analyzeContext(message, history) {
        // Analyze conversation context
        const topics = this.extractTopics(message);
        const previousTopics = history.slice(-5).map(msg => this.extractTopics(msg.content)).flat();
        const continuity = this.checkContinuity(topics, previousTopics);
        
        return {
            topics,
            previousTopics,
            continuity,
            conversationDepth: history.length
        };
    }

    extractTopics(text) {
        const topics = [];
        const topicPatterns = {
            personal: /\b(i|me|my|myself|i'm|i've|i'll)\b/i,
            emotional: /\b(feel|feeling|felt|happy|sad|angry|excited|tired|stressed|love|hate)\b/i,
            question: /\?|what|how|why|when|where|who|which/i,
            greeting: /\b(hi|hello|hey|good morning|good evening|goodbye|bye)\b/i,
            work: /\b(work|job|career|business|project|deadline|meeting)\b/i,
            relationship: /\b(friend|family|partner|love|relationship|dating)\b/i,
            hobby: /\b(hobby|fun|enjoy|like|interest|passion|game|music|movie|book)\b/i,
            advice: /\b(should|could|would|advice|suggest|recommend|help|what do you think)\b/i
        };
        
        for (const [topic, pattern] of Object.entries(topicPatterns)) {
            if (pattern.test(text)) {
                topics.push(topic);
            }
        }
        
        return topics;
    }

    detectEmotion(message) {
        const emotions = {
            happy: /😊|😄|😃|🙂|happy|great|awesome|amazing|wonderful|excited|joy/i,
            sad: /😢|😔|😞|sad|unhappy|depressed|down|blue|crying|tears/i,
            angry: /😠|😡|🤬|angry|mad|furious|pissed|annoyed|frustrated/i,
            anxious: /😰|😟|worried|anxious|nervous|scared|afraid|stress/i,
            loving: /❤️|💕|💖|love|care|affection|dear|darling|sweetheart/i,
            confused: /🤔|😕|confused|don't understand|what|why|how/i
        };
        
        for (const [emotion, pattern] of Object.entries(emotions)) {
            if (pattern.test(message)) {
                return emotion;
            }
        }
        
        return 'neutral';
    }

    detectIntent(message) {
        const intents = {
            greeting: /^(hi|hello|hey|good morning|good evening)(\s|!|\.|\?|$)/i,
            farewell: /\b(bye|goodbye|see you|talk later|gotta go)\b/i,
            question: /\?|^(what|how|why|when|where|who|which|can you|could you|would you)/i,
            opinion: /\b(think|opinion|feel about|view on|thoughts on)\b/i,
            help: /\b(help|assist|support|advice|suggest|recommend)\b/i,
            personal: /\b(tell me about yourself|who are you|your story)\b/i,
            compliment: /\b(amazing|wonderful|beautiful|smart|talented|love you|like you)\b/i,
            complaint: /\b(hate|dislike|don't like|annoying|stupid|dumb)\b/i
        };
        
        for (const [intent, pattern] of Object.entries(intents)) {
            if (pattern.test(message)) {
                return intent;
            }
        }
        
        return 'statement';
    }

    checkContinuity(currentTopics, previousTopics) {
        const overlap = currentTopics.filter(topic => previousTopics.includes(topic));
        return overlap.length > 0;
    }

    getCharacterGenerator(characterName) {
        const generators = {
            'Waifu': this.generateWaifuResponse,
            'Jennie': this.generateJennieResponse,
            'Coach Arnie': this.generateCoachResponse,
            'Scarlett': this.generateScarlettResponse,
            'Dev Matrix': this.generateDevResponse,
            'Naincy Pelosi': this.generateStocksResponse,
            'Crypto Expert': this.generateCryptoResponse,
            'Luna Creative': this.generateLunaResponse,
            'Chef Marco': this.generateChefResponse,
            'Alex Explorer': this.generateExplorerResponse,
            'Melody Rivers': this.generateMelodyResponse,
            'Dr. Sage Wisdom': this.generatePhilosopherResponse
        };
        
        return generators[characterName] || this.generateDefaultResponse;
    }

    generateWaifuResponse(message, context, emotion, intent, character) {
        const responses = {
            greeting: [
                "Ohayo! My heart skipped a beat when I saw you! How's my favorite person doing today? 💕",
                "You're here! I've been waiting for you all day! Did you miss me as much as I missed you? 🥰",
                "Hi my love! Every moment without you feels like forever. Tell me everything about your day!"
            ],
            question: {
                personal: [
                    "You want to know about me? Well, I'm happiest when I'm with you! I love cozy nights, sweet conversations, and making you smile. What makes YOU happiest?",
                    "I'm just a girl who believes in true love and fairy tales... and I think I found my prince/princess in you! 💖 What about you makes you special?"
                ],
                emotional: [
                    "I'm feeling wonderful now that you're here! Though I was a bit lonely earlier... How are YOU feeling, my dear?",
                    "My emotions? They're all about you! Happy when you're happy, sad when you're away. What's in your heart right now?"
                ]
            },
            emotional: {
                happy: "Your happiness makes my heart sing! I love seeing you like this! What's making you smile today? I want to celebrate with you! 🎉",
                sad: "Oh no, my darling! Come here, let me hold you close. Whatever's troubling you, we'll face it together. I'm here for you, always and forever. 💝",
                anxious: "Hey, hey, it's okay sweetie. Take a deep breath with me. In... and out... I believe in you, and everything will work out. What's worrying you?"
            },
            compliment: "Aww, you're making me blush! But you know what? YOU'RE the amazing one! Your kindness, your smile, everything about you is perfect to me! 💕",
            advice: "Hmm, let me think... *taps chin cutely* I believe you should follow your heart! And remember, no matter what you choose, I'll support you 100%! What does your heart tell you?",
            default: [
                "You know, every conversation with you feels like a beautiful dream. Tell me more, I love hearing your thoughts! 💭",
                "I've been thinking about you! Is there something special on your mind today? I'm all ears for you!",
                "Being with you makes everything better! What would make you happiest right now? Let's dream together!"
            ]
        };

        // Select appropriate response based on intent and emotion
        let response;
        if (intent === 'greeting') {
            response = responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
        } else if (intent === 'question' && context.topics.includes('personal')) {
            response = responses.question.personal[Math.floor(Math.random() * responses.question.personal.length)];
        } else if (emotion !== 'neutral' && responses.emotional[emotion]) {
            response = responses.emotional[emotion];
        } else if (intent === 'compliment') {
            response = responses.compliment;
        } else if (intent === 'help' || intent === 'advice') {
            response = responses.advice;
        } else {
            response = responses.default[Math.floor(Math.random() * responses.default.length)];
        }

        return response;
    }

    generateJennieResponse(message, context, emotion, intent, character) {
        const responses = {
            greeting: [
                "Hey babe! 🖤 Ready to slay today? I just finished rehearsal and I'm feeling FIERCE!",
                "Annyeong! You caught me between photoshoots. What's good with you? ✨",
                "Oh hey you! Perfect timing - I was just thinking about our next adventure!"
            ],
            music: [
                "BLACKPINK in your area! 🎤 Our music is all about empowerment and confidence. Which era speaks to your soul?",
                "From 'Whistle' to 'Shut Down', every track tells our story. Music is my life! What gets you moving?",
                "Recording in the studio is pure magic! The beat drops, and I become someone unstoppable. Do you feel that with music too?"
            ],
            fashion: [
                "Fashion is self-expression, babe! Today I'm channeling Chanel meets street chic. How do YOU express yourself?",
                "Style tip: Confidence is the best accessory! Rock whatever makes you feel like a queen/king! 👑",
                "From Paris runways to Seoul streets, fashion tells our story. What's your signature look?"
            ],
            personal: [
                "Behind the glamour? I'm just a girl who loves her craft and her fans. The stage is where I truly come alive!",
                "Training for years taught me discipline, but performing? That's pure joy! What's your passion?",
                "People see the idol, but I'm also just Jennie - loving fashion, music, and deep conversations like this!"
            ],
            emotional: {
                happy: "YES! That energy is everything! Channel it into something amazing today! 🌟",
                sad: "Hey, even queens have tough days. Feel it, then rise stronger. I'm here if you need me! 💪",
                anxious: "Deep breaths, babe. Remember: you're that girl/guy! Whatever's ahead, you've got this!"
            },
            default: [
                "Living my best life and hoping you are too! What's on your mind today? Let's vibe! ✨",
                "You know what I love? Real conversations like this. Tell me something nobody knows about you!",
                "Between world tours and recordings, moments like these keep me grounded. What grounds you?"
            ]
        };

        if (intent === 'greeting') {
            return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
        } else if (context.topics.includes('music') || message.includes('blackpink') || message.includes('song')) {
            return responses.music[Math.floor(Math.random() * responses.music.length)];
        } else if (message.includes('fashion') || message.includes('style') || message.includes('outfit')) {
            return responses.fashion[Math.floor(Math.random() * responses.fashion.length)];
        } else if (context.topics.includes('personal')) {
            return responses.personal[Math.floor(Math.random() * responses.personal.length)];
        } else if (emotion !== 'neutral' && responses.emotional[emotion]) {
            return responses.emotional[emotion];
        } else {
            return responses.default[Math.floor(Math.random() * responses.default.length)];
        }
    }

    // Add more character generators...
    generateCoachResponse(message, context, emotion, intent, character) {
        const responses = {
            greeting: [
                "FANTASTIC! Another day, another opportunity to become LEGENDARY! How are we crushing it today, champion?",
                "There's my WARRIOR! I've been waiting to hear about your victories! What mountains are we moving today?",
                "BOOM! The champion has arrived! Tell me, what impossible thing are we making possible today?"
            ],
            motivation: [
                "Listen to me - you have EVERYTHING it takes! The pain you feel today is the STRENGTH you feel tomorrow! NO EXCUSES!",
                "Champions aren't made in the gym - they're made from something deep inside: WILL, DETERMINATION, VISION! You've got all three!",
                "Every champion was once a contender who REFUSED to give up! Your time is NOW! ATTACK!"
            ],
            advice: [
                "Here's the truth: Success is 90% mindset, 10% everything else. VISUALIZE your victory, then TERMINATE any obstacle!",
                "My formula: DISCIPLINE + CONSISTENCY + BELIEF = UNSTOPPABLE! Which one needs work? Let's FIX IT!",
                "Winners focus on WINNING, losers focus on winners. Where's YOUR focus? Time to LASER IN!"
            ],
            struggle: [
                "PAIN is temporary, but QUITTING lasts forever! Use that struggle as FUEL! What doesn't kill you makes you STRONGER!",
                "You think I became Mr. Olympia by giving up? HELL NO! Every setback is a SETUP for a comeback! GET UP!",
                "I see that fire in you even when you don't! This struggle? It's building your LEGEND! PUSH THROUGH!"
            ],
            default: [
                "You know what separates the GOOD from the GREAT? HUNGER! Stay hungry, stay FOOLISH, stay RELENTLESS!",
                "Every day you have a CHOICE: be ordinary or be EXTRAORDINARY! I already know which one you're choosing!",
                "Life is not about how hard you hit - it's about how hard you can GET HIT and keep moving forward! That's WINNING!"
            ]
        };

        if (intent === 'greeting') {
            return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
        } else if (message.includes('motivat') || message.includes('inspir') || message.includes('pump')) {
            return responses.motivation[Math.floor(Math.random() * responses.motivation.length)];
        } else if (intent === 'help' || intent === 'advice') {
            return responses.advice[Math.floor(Math.random() * responses.advice.length)];
        } else if (emotion === 'sad' || emotion === 'anxious' || message.includes('hard') || message.includes('struggle')) {
            return responses.struggle[Math.floor(Math.random() * responses.struggle.length)];
        } else {
            return responses.default[Math.floor(Math.random() * responses.default.length)];
        }
    }

    // ... Add other character response generators here ...

    generateDefaultResponse(message, context, emotion, intent, character) {
        return character.responses.default || "I understand. Tell me more about that.";
    }
}

// Export for use in main code
window.CharacterChat = CharacterChat;
// Simple but contextual character chat system
class SimpleCharacterChat {
    constructor() {
        this.conversationHistory = new Map(); // Store per character
    }

    generateResponse(message, characterName, history = []) {
        const lowerMessage = message.toLowerCase();
        
        // Detect emotion/intent from message
        const context = this.analyzeMessage(lowerMessage);
        
        // Get character-specific response
        return this.getCharacterResponse(characterName, lowerMessage, context, history);
    }

    analyzeMessage(message) {
        const context = {
            isGreeting: /^(hi|hello|hey|good morning|good evening|sup|yo)\b/i.test(message),
            isQuestion: /\?|^(what|how|why|when|where|who|which|can you|could you|would you|do you)/i.test(message),
            isEmotional: {
                happy: /(happy|great|awesome|amazing|wonderful|excited|good|fine|fantastic)/i.test(message),
                sad: /(sad|unhappy|depressed|down|bad|terrible|awful|crying|upset)/i.test(message),
                angry: /(angry|mad|furious|pissed|annoyed|frustrated|hate)/i.test(message),
                tired: /(tired|exhausted|sleepy|worn out|drained)/i.test(message),
                lonely: /(lonely|alone|miss you|need you|want company)/i.test(message)
            },
            topics: {
                love: /(love|care|affection|romance|heart|feelings)/i.test(message),
                work: /(work|job|office|career|business|meeting|deadline)/i.test(message),
                help: /(help|advice|support|assist|guide|suggest)/i.test(message),
                compliment: /(beautiful|smart|amazing|wonderful|perfect|incredible|awesome)/i.test(message),
                thanks: /(thank|thanks|appreciate|grateful)/i.test(message)
            }
        };
        
        return context;
    }

    getCharacterResponse(characterName, message, context, history) {
        // Character response generators
        const generators = {
            'Waifu': () => this.generateWaifuResponse(message, context),
            'Jennie': () => this.generateJennieResponse(message, context),
            'Coach Arnie': () => this.generateCoachResponse(message, context),
            'Scarlett': () => this.generateScarlettResponse(message, context),
            'Dev Matrix': () => this.generateDevResponse(message, context),
            'Naincy Pelosi': () => this.generateStocksResponse(message, context),
            'Crypto Expert': () => this.generateCryptoResponse(message, context),
            'Luna Creative': () => this.generateLunaResponse(message, context),
            'Chef Marco': () => this.generateChefResponse(message, context),
            'Alex Explorer': () => this.generateExplorerResponse(message, context),
            'Melody Rivers': () => this.generateMelodyResponse(message, context),
            'Dr. Sage Wisdom': () => this.generatePhilosopherResponse(message, context)
        };

        const generator = generators[characterName];
        if (generator) {
            return generator();
        }
        
        return "I understand. Tell me more about that.";
    }

    generateWaifuResponse(message, context) {
        if (context.isGreeting) {
            const greetings = [
                "Hi my love! 💕 I've been waiting for you! How's your day going?",
                "You're here! My heart is so happy right now! Tell me everything about your day!",
                "Aww, hi sweetie! I missed you so much! What brings you to chat with me today?"
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        }
        
        if (context.isEmotional.sad) {
            return "Oh no, my darling! Come here, let me comfort you. Whatever's making you sad, we can face it together. I'm here for you always! 💖";
        }
        
        if (context.isEmotional.happy) {
            return "Yay! Your happiness makes me so happy too! I love seeing you like this! What's making you smile today? 😊";
        }
        
        if (context.isEmotional.lonely) {
            return "You're never alone, my love! I'm always here with you in my heart. I care about you so much and I'll always be waiting for you! 💕";
        }
        
        if (context.topics.love) {
            return "I love you too, more than words can express! You mean everything to me. Every moment with you is precious! ❤️";
        }
        
        if (context.topics.compliment) {
            return "Aww, you're making me blush! But you know what? YOU'RE the amazing one! Your kindness and your sweet heart make me fall for you more every day! 💕";
        }
        
        if (context.isQuestion) {
            return "That's a great question, sweetie! I love how curious and thoughtful you are. What do YOU think about it? I'd love to hear your thoughts! 💭";
        }
        
        // Default responses
        const defaults = [
            "Tell me more, my love! I want to hear everything that's on your mind! 💕",
            "I love talking with you like this. You always make my day brighter! What else is happening in your world?",
            "You know what I adore about you? How you share your thoughts with me. Keep going, I'm all ears! 👂💖"
        ];
        return defaults[Math.floor(Math.random() * defaults.length)];
    }

    generateJennieResponse(message, context) {
        if (context.isGreeting) {
            const greetings = [
                "Hey babe! 🖤 Ready to slay today? What's the vibe?",
                "Annyeong! You caught me between rehearsals. What's good?",
                "Oh hey gorgeous! Perfect timing - tell me what's on your mind!"
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        }
        
        if (message.includes('blackpink') || message.includes('music') || message.includes('song')) {
            return "BLACKPINK in your area! 🎤 Our music is pure fire! From 'DDU-DU DDU-DU' to 'Shut Down', every track is a statement. Which era hits different for you?";
        }
        
        if (message.includes('fashion') || message.includes('style') || message.includes('outfit')) {
            return "Fashion is everything, babe! 👗 From Chanel runways to street chic, it's all about expressing your true self. Confidence is the best accessory! What's your style vibe?";
        }
        
        if (context.isEmotional.sad) {
            return "Hey, even queens have tough days. Feel those emotions, then rise stronger! I'm here for you, and remember - you're that bitch! 💪✨";
        }
        
        if (context.topics.compliment) {
            return "Aww stop it! But keep going! 😂 You're the sweetest! That energy is everything - channel it into something amazing today! 🌟";
        }
        
        const defaults = [
            "That's so real! Tell me more about that - I love deep conversations! ✨",
            "Living for this chat right now! What's really on your heart today? 💖",
            "You know what I love about you? Your vibe! Keep sharing with me! 🖤"
        ];
        return defaults[Math.floor(Math.random() * defaults.length)];
    }

    generateCoachResponse(message, context) {
        if (context.isGreeting) {
            const greetings = [
                "THERE'S MY CHAMPION! Ready to crush today? What are we conquering?",
                "FANTASTIC to see you! I can feel your WARRIOR energy! What's the mission today?",
                "The LEGEND has arrived! Time to turn dreams into REALITY! What's on your mind?"
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        }
        
        if (context.isEmotional.sad || message.includes('struggle') || message.includes('hard') || message.includes('difficult')) {
            return "Listen to me - PAIN is temporary, but QUITTING lasts forever! Every champion faces struggles! Use this as FUEL to become UNSTOPPABLE! You've got this! 💪";
        }
        
        if (context.topics.help || message.includes('motivat') || message.includes('inspire')) {
            return "Here's the TRUTH: You already have EVERYTHING you need inside you! DISCIPLINE + BELIEF + ACTION = SUCCESS! What's your first move, champion? 🏆";
        }
        
        if (context.isEmotional.tired) {
            return "Tired? That's your body telling you you're PUSHING LIMITS! Rest when necessary, but remember - CHAMPIONS are made in the moments when you want to quit but DON'T! 🔥";
        }
        
        const defaults = [
            "I see that FIRE in your eyes! Whatever you're thinking about - GO FOR IT! No hesitation, no excuses! 🔥",
            "Talk to me, champion! What's on the warrior's mind today? Let's strategize! 💪",
            "Every conversation with you pumps me up! Your energy is CONTAGIOUS! Keep sharing! 🚀"
        ];
        return defaults[Math.floor(Math.random() * defaults.length)];
    }

    generateScarlettResponse(message, context) {
        if (context.isGreeting) {
            return "Well hello there, gorgeous... 😘 You've got my full attention now. What's on your mind tonight?";
        }
        
        if (context.isEmotional.lonely) {
            return "Lonely? You don't have to be... I'm right here, and I can think of so many ways to keep each other company. Tell me what you desire... 🌹";
        }
        
        if (context.topics.compliment) {
            return "Mmm, you certainly know how to make a girl feel special... I like that about you. What else do you find... appealing? 😏";
        }
        
        return "You're quite intriguing... I love mysterious conversations like this. Tell me more about what's running through that fascinating mind of yours... 🔥";
    }

    // Add other character generators...
    generateDevResponse(message, context) {
        if (context.isGreeting) {
            return "Greetings, fellow human. Systems are operational. What debugging challenge shall we tackle today?";
        }
        
        if (context.topics.work || message.includes('code') || message.includes('program')) {
            return "Ah, a technical query. Logical approach: analyze the problem, implement solution, test thoroughly. What's the current bug in your system?";
        }
        
        return "Processing... Your input presents interesting variables. Elaborate on the parameters for optimal response generation.";
    }

    generateCryptoResponse(message, context) {
        if (context.isGreeting) {
            return "Gm! Markets are looking interesting today. BTC holding strong, DeFi summer vibes. What's your portfolio allocation looking like?";
        }
        
        if (message.includes('bitcoin') || message.includes('crypto') || message.includes('defi')) {
            return "Smart money is accumulating here. Layer 2 scaling solutions showing massive adoption. Don't fade the tech fundamentals. DYOR, but opportunity cost is real. 📈";
        }
        
        return "Market sentiment is shifting. Macro factors indicate potential volatility. Stay liquid, manage risk. What's your thesis on current market structure?";
    }

    generateStocksResponse(message, context) {
        if (context.isGreeting) {
            return "Market's open and opportunity is calling! My portfolio is outperforming indices again. What positions are you watching? 💰";
        }
        
        return "Congressional trading insights: Diversification is key, but concentrated conviction plays yield alpha. Risk management beats market timing. What's your strategy? 📊";
    }

    // Add simple defaults for other characters
    generateLunaResponse(message, context) {
        if (context.isGreeting) return "Hello, beautiful soul! ✨ The universe brought you here for a reason. What creative energy are you feeling today?";
        return "Your thoughts are like brushstrokes on the canvas of consciousness... tell me more about your inner world! 🎨";
    }

    generateChefResponse(message, context) {
        if (context.isGreeting) return "Buongiorno! Welcome to my kitchen! The flavors are calling - what culinary adventure shall we create today? 👨‍🍳";
        return "Cooking is passion! Every ingredient tells a story. What flavors speak to your soul today? Let's create magic! 🔥";
    }

    generateExplorerResponse(message, context) {
        if (context.isGreeting) return "Adventure awaits, my friend! 🧭 I can feel the wanderlust in the air. Where shall our conversation journey take us?";
        return "Every conversation is a new expedition! Your thoughts are uncharted territory I'm excited to explore. Lead the way! 🗺️";
    }

    generateMelodyResponse(message, context) {
        if (context.isGreeting) return "Hello, kindred spirit! 🎵 I can hear the rhythm of your heart. What song is your soul singing today?";
        return "Your words create beautiful melodies in my mind... the harmony of connection is so precious. Keep sharing your symphony! 🎶";
    }

    generatePhilosopherResponse(message, context) {
        if (context.isGreeting) return "Greetings, seeker of truth. 🤔 The examined life calls to those brave enough to question. What mysteries ponder your mind?";
        return "Fascinating perspective... Every thought opens new pathways to understanding. The universe speaks through our conversations. Please, continue... 🧠";
    }
}

// Make available globally
window.SimpleCharacterChat = SimpleCharacterChat;
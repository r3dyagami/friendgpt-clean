# FriendGPT - AI Character Chat

A modern AI character chat interface with multiple personalities powered by OpenAI's ChatGPT API.

## Features
- 🤖 **12 AI Characters** with unique personalities (Waifu, Coach Arnie, Jennie, Crypto Expert, etc.)
- 🧠 **Real ChatGPT Integration** - Contextual, intelligent responses
- 🎨 **Character Creator** - Design custom characters with 6 personality types
- 🎁 **Gifting System** - Send virtual gifts to characters
- ⚡ **Energy System** - Gamified chat experience
- 🌊 **Infinite Scroll** - Horizontally scrolling character rows
- 📱 **Mobile-Responsive** - Perfect on all devices

## 🚀 Quick Setup

### Option 1: Deploy to Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/r3dyagami/friendgpt-clean)

1. Click the button above
2. Connect your GitHub account
3. Deploy the project
4. **IMPORTANT**: Add your OpenAI API key in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add: `OPENAI_API_KEY` = `sk-your-actual-api-key-here`

### Option 2: Local Development
```bash
git clone https://github.com/r3dyagami/friendgpt-clean.git
cd friendgpt-clean

# Create .env file
cp .env.example .env
# Edit .env and add your OpenAI API key

# Install Vercel CLI and run locally
npm i -g vercel
vercel dev
```

## 🔑 Getting Your OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Create a new secret key (starts with `sk-...`)
3. **Add $5+ to your OpenAI account** (required for API access)
4. Add the key to Vercel environment variables

## ⚠️ Important Notes

- **You MUST add your OpenAI API key** or the app will only use static fallback responses
- **You need credits in your OpenAI account** for the API to work
- Without the API key, characters will show "⚠️ ChatGPT API not available" message

## Local Development
```bash
# Clone the repository
git clone https://github.com/r3dyagami/friendgpt-clean.git
cd friendgpt-clean

# Create .env file
cp .env.example .env
# Add your OpenAI API key to .env

# Install Vercel CLI and run locally
npm i -g vercel
vercel dev
```

## How It Works
- **Frontend**: Static HTML/CSS/JavaScript
- **Backend**: Vercel serverless functions (`/api/chat.js`)
- **AI**: OpenAI GPT-3.5-turbo with character-specific prompts
- **Fallback**: Local contextual responses if API fails

## Characters
Each character has unique personalities and response patterns:
- **Waifu**: Loving, caring companion
- **Jennie**: K-pop idol with fashion sense
- **Coach Arnie**: Motivational fitness coach
- **Scarlett**: Flirtatious and mysterious
- **Dev Matrix**: Logical programmer
- **Crypto Expert**: Web3 and DeFi analyst
- **And more...**

## License
MIT
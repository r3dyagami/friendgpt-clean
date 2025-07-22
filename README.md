# FriendGPT - AI Character Chat

A modern AI character chat interface with multiple personalities powered by OpenAI's GPT.

## Features
- 🤖 Multiple AI personalities (Waifu, Coach Arnie, Jennie, etc.)
- 💬 Context-aware conversations with memory
- 🎨 Beautiful character avatars and interface
- 🌓 Dark/Light mode support
- 📱 Mobile-responsive design
- ⚡ Fast responses with intelligent fallbacks

## Setup

### 1. Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/r3dyagami/friendgpt-clean)

### 2. Add Environment Variables
In your Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add: `OPENAI_API_KEY` = your OpenAI API key

### 3. Get OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Create a new secret key
3. Add it to your Vercel environment variables

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
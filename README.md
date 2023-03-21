# Discord GPT-4 Chatbot
This repository contains a Discord chatbot powered by OpenAI's GPT-4 model. It allows you to interact with the AI model within a Discord server. The chatbot listens to messages sent by users and replies using GPT-4, making it a great addition to any server for fun, engaging, and informative conversations.

![image](https://user-images.githubusercontent.com/37600872/226459308-6de92a4e-7665-4a35-9b06-a87d84deae63.png)

<a href="https://github.com/aaronmansfield5/Discord-GPT-4-Chatbot/issues">![Issues](https://img.shields.io/github/issues/aaronmansfield5/Discord-GPT-4-Chatbot?style=flat)</a>

## Prerequisites
- <a href="https://nodejs.org/">![](https://img.shields.io/badge/-Node.js%20v14.0%2B-informational?style=flat&logo=nodedotjs&logoColor=white&color=339933)</a>
- <a href="https://www.npmjs.com/">![](https://img.shields.io/badge/-NPM%20v6.14%2B-informational?style=flat&logo=npm&logoColor=white&color=CB3837)</a>
- <a href="https://discord.com/">![](https://img.shields.io/badge/-Account-informational?style=flat&logo=discord&logoColor=white&color=5865F2)</a>
- <a href="https://github.com/aaronmansfield5/Discord-GPT-4-Chatbot#discord-bot-token">![](https://img.shields.io/badge/-Bot%20Token-informational?style=flat&logo=discord&logoColor=white&color=5865F2)</a>
- <a href="https://github.com/aaronmansfield5/Discord-GPT-4-Chatbot#openai-api-key">![](https://img.shields.io/badge/-API%20Key-informational?style=flat&logo=openai&logoColor=white&color=412991)</a>

## Installation
1. Clone the repository:
```bash
git clone https://github.com/aaronmansfield5/discord-gpt-4-chatbot.git
cd discord-gpt-4-chatbot
```

2. Install the required dependencies:
```javascript
npm install discord.js dotenv openai
```

3. Create a .env file in the project root directory and add your Discord bot token and OpenAI API key:
```makefile
GPT_API_KEY=your_openai_api_key
DISCORD_BOT_TOKEN=your_discord_bot_token
```
Replace `your_openai_api_key` and `your_discord_bot_token` with your actual OpenAI API key and Discord bot token.

## Obtaining Tokens

### Discord Bot Token
1. Go to the [**Discord Developer Portal**](https://discord.com/developers/applications) and log in with your Discord account.
2. Click the "New Application" button and give your application a name.
3. Go to the "Bot" tab and click the "Add Bot" button. Confirm by clicking "Yes, do it!".
4. Under the "Bot" tab, you can see the bot's token. Click the "Copy" button to copy the token.

### OpenAI API Key
1. Go to the [**OpenAI Platform**](https://platform.openai.com/signup) and sign up for an account or log in if you already have one.
2. Once logged in, go to the [**API keys**](https://platform.openai.com/account/api-keys) section.
3. Generate a new API key or use an existing one.

## Running the Bot
1. Start the bot by running:
```css
node main.js
```
2. Invite the bot to your Discord server using the invite link provided by the Discord Developer Portal.

3. Once the bot is online, it will start listening to messages and respond using GPT-4.

## Code Explanation
The main components of the code are:

- Importing required libraries and initializing the Discord client and OpenAI API client.
- Loading API keys from the .env file.
- Setting up event listeners for the ready and messageCreate events.
- Implementing the generateResponse function, which sends a message to the OpenAI API and processes the response.
- Sending the AI-generated response to the Discord channel.
- When a message is received, the generateResponse function is called with the message content as the prompt. It sends the prompt to the OpenAI API and receives a response generated by the GPT-4 model. The bot then sends this response back to the Discord channel.

## Contributing
Feel free to submit issues or pull requests if you find any problems or have suggestions for improvements. Contributions are welcome and appreciated!

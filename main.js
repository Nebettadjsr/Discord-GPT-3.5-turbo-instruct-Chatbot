require('dotenv').config();
const {
    Client,
    GatewayIntentBits,
    Partials
} = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');

// Initialize Discord client
const client = new Client({
    partials: [Partials.Channel, Partials.Message, Partials.GuildMember],
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates]
});

// Environment variables
const GPT_API_KEY = process.env.GPT_API_KEY;
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

// Configuration for OpenAI
const configuration = new Configuration({
    apiKey: GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const response = await generateResponse(message.content);
    message.channel.send(response);
});

async function generateResponse(prompt) {
    try {
        const response = await openai.createCompletion({
            model: 'gpt-3.5-turbo-instruct',
            prompt: prompt,
            max_tokens: 100,
            n: 1,
            stop: null,
            temperature: 0.5,
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating response:', error.response ? error.response.data : error.message);
        return 'Sorry, I am unable to generate a response at this time.';
    }
}

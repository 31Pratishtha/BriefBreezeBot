import { Client, GatewayIntentBits } from "discord.js";
import {discordBotKey} from './config.js'
import { fetchNews, articleTitles } from "./news.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    message.reply('Hi from bot');
})

client.on('messageCreate', async (message) => {
    if(message.author.bot) return;

    if(message.content === '!news'){
        try{
            await fetchNews();
            console.log(JSON.stringify(articleTitles[0]))
            message.channel.send(JSON.stringify(articleTitles[0]));

        }catch(error){
            message.channel.send('Error fetching news');
        }

    }
})

client.login(discordBotKey);
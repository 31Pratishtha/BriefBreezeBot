import dotenv from 'dotenv'

dotenv.config()

const newsApiKey = process.env.NEWS_API;
const discordBotKey = process.env.BOT_LOGIN;
const summarizeKey = process.env.SUMMARIZE_API_KEY;

export { newsApiKey, discordBotKey, summarizeKey };

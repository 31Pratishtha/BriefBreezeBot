import dotenv from 'dotenv'

dotenv.config()

const newsApiKey = process.env.NEWS_API;
const discordBotKey = process.env.BOT_LOGIN;

export { newsApiKey, discordBotKey };

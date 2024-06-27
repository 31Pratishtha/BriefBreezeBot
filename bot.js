import { Client, GatewayIntentBits } from "discord.js";
import { discordBotKey } from "./config.js";
import { NewsFetcher } from "./news.js";
import { Summarizer } from "./summarize.js";

class DiscordBot {
  constructor(newsFetcher, summarizer) {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });
    this.newsFetcher = newsFetcher;
    this.summarizer = summarizer
  }

  async handleNewsRequest(message) {
    try {
      const articles = await newsFetcher.fetchNews();
      const topArticle = articles[0];
      console.log("top article: \n", topArticle );
      const summary = await summarizer.summarize(topArticle);
      message.reply(summary);
      console.log("summary: \n", summary);
    } catch (error) {
      message.reply("Failed to fetch news");
    }
  }

  start() {
    this.client.on("ready", () => {
      console.log(`Logged in as ${this.client.user.tag}`);
    });

    this.client.on("messageCreate", (message) => {
      if (message.author.bot) return;
      message.reply("Hi from bot");
    });

    this.client.on("messageCreate", async (message) => {
      if (message.author.bot) return;

      if (message.content === "!news") {
        try{
            await this.handleNewsRequest(message);
        } catch(error) {
            console.log(error);
        }
      }
    });
    this.client.login(discordBotKey);
  }
}

const newsFetcher = new NewsFetcher();
const summarizer = new Summarizer()

const bot = new DiscordBot(newsFetcher, summarizer);
bot.start();

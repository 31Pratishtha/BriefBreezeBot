//fetch news
import axios from "axios";
import { newsApiKey } from "./config.js";
const numOfArticles = 5;

class NewsFetcher {
  constructor() {}

  async fetchNews() {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=business&category=science&category=technology&language=en&apiKey=${newsApiKey}`
      );
      const articleTitles = [];

      for (var i = 0; i < numOfArticles; i++) {
        const article = res.data.articles[i];
        articleTitles.push({
          title: article.title,
          publishedDate: article.publishedAt,
          url: article.url,
        });
      }

      console.log(articleTitles);
      return articleTitles;
    } catch (error) {
      console.error(error);
    }
  }
}

export { NewsFetcher };

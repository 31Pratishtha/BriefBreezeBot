import { GoogleGenerativeAI } from "@google/generative-ai";
import { summarizeKey } from "./config.js";

const genAI = new GoogleGenerativeAI(summarizeKey);

class Summarizer {
  constructor() {
    this.model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  async summarize(article) {
    const prompt = `visit this url and summarize the article in maximum 200 words in bullet points. ${article.url}`;
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  }
}

export { Summarizer };

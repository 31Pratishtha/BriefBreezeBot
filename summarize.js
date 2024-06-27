import { GoogleGenerativeAI } from "@google/generative-ai";
import { fetchNews, articleTitles } from "./news.js";

const genAI = new GoogleGenerativeAI("AIzaSyBYfk5hD-GwcaJggO1P0iWhs1pTuFibBjw");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run() {
  const prompt = `visit this url and summarize the article in 200 words. ${url}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();

//fetch news
import axios from "axios";
const numOfArticles = 5;

const fetchNews = async () => {
    try {
        const res = await axios.get('https://newsapi.org/v2/top-headlines?category=business&category=science&category=technology&language=en&apiKey=a25a3356318a440396243f6e225333fc')
        const articleTitles = [];
        for(var i = 0; i < numOfArticles; i++){
            const article = res.data.articles[i];
            articleTitles.push({title: article.title, publishedDate:article.publishedAt, url: article.url});
        }
        console.log(articleTitles);
    } catch (error) {
        console.error(error);
    }
}

fetchNews();
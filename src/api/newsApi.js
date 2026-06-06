import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNewsByCategory = async (category) => {
  let url;

  if (category === "national") {
    url = `https://newsapi.org/v2/everything?q=India&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  }

  const response = await axios.get(url);

  return response.data.articles;
};
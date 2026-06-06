import axios from "axios";

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const getNewsByCategory = async (category) => {
  let url;

  if (category === "national") {
    url = `https://gnews.io/api/v4/top-headlines?country=in&apikey=${API_KEY}`;
  } else {
    url = `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${API_KEY}`;
  }

  const response = await axios.get(url);

  return response.data.articles;
};
import axios from "axios";

export const getNewsByCategory = async (category) => {
  const response = await axios.get(
    `/api/news?category=${category}`
  );

  return response.data.articles;
};
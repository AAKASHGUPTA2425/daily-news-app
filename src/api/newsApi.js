import axios from "axios";

export const getNewsByCategory = async (category) => {
  const response = await axios.get(
    `/api/new?category=${category}`
  );

  return response.data.articles;
};
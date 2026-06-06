import { useEffect, useState } from "react";
import { getNewsByCategory } from "../api/newsApi";

function NewsList({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async () => {
    try {
      const data = await getNewsByCategory(category);

      console.log("DATA:", data);

      setArticles(data || []);
    } catch (error) {
      console.error(error);
      setArticles([]);
    }
  };

  return (
    <div className="news-grid">
      {articles?.map((article, index) => (
        <div className="news-card" key={index}>
          <h3>{article.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
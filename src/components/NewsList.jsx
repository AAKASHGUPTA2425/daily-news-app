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
          <img
            src={
              article.image ||
              "https://placehold.co/600x400?text=No+Image"
            }
            alt={article.title}
          />

          <div className="news-content">
            <h3>{article.title}</h3>

            <p>
              {article.description
                ? article.description
                : "No description available."}
            </p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Read Full News →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
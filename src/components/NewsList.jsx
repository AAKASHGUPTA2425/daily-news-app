import { useEffect, useState } from "react";
import { getNewsByCategory } from "../api/newsApi";

function NewsList({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async () => {
    const data = await getNewsByCategory(category);
    setArticles(data);
  };

  return (
    <div className="news-grid">
      {articles.map((article, index) => (
        <div className="news-card" key={index}>
          <img
            src={
              article.urlToImage ||
              "https://placehold.co/400x200?text=No+Image"
            }
            alt={article.title}
          />

          <div className="news-content">
            <h3>{article.title}</h3>

            <p>{article.description}</p>

            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
            >
              Read Full Story →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
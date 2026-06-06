import { useState } from "react";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState("general");

  return (
    <div className="app">
      <header className="hero">
        <h1>📰 Daily News</h1>
        <p>Latest Headlines From Around The World</p>
      </header>

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <NewsList category={selectedCategory} />
    </div>
  );
}

export default App;
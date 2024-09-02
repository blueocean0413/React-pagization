import { useState } from "react";
import ArticleItem from "./ArticleItem";

const ArticleAtom = () => {
  const [articles, setArticles] = useState([]);

  return (
    <>
      {articles.map((article, idx) => (
        <ArticleItem title={article.title} description={articles.description} />
      ))}
    </>
  );
};

export default ArticleAtom;

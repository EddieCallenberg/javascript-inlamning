import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail() {
  const { articleId } = useParams();
  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    fetch(`https://win23-assignment.azurewebsites.net/api/articles/${articleId}`)
      .then((response) => response.json())
      .then((data) => {
        setArticleData(data);
      })
      .catch((error) => {
        console.error('Fel vid hämtning av artikeldata:', error);
      });
  }, [articleId]);

  return (
    <div>
      <h2>Artikel: {articleId}</h2>
      <p>Titel: {articleData.title}</p>
      <p>Innehåll: {articleData.content}</p>
      {/* Visa andra artikeldata här */}
    </div>
  );
}

export default ArticleDetail;

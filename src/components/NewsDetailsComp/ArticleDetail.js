import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail() {
  const { articleId } = useParams();
  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    fetch(`https://win23-assignment.azurewebsites.net/api/articles/${articleId}`)
      .then((response) => response.text())
      .then((data) => {
        const articleDataObject = JSON.parse(data);
        setArticleData(articleDataObject);
      })
      .catch((error) => {
        console.error('Fel vid hämtning av artikeldata:', error);
      });
  }, [articleId]);
  console.log(articleData)

  return (
    <div>
      <h2>{articleData.title}</h2>
      <div className='date-category-author'>
        <p>{articleData.published}</p>
        <p>{articleData.category}</p>
        <p>{articleData.author}</p>
      </div>
      <img src={articleData.imageUrl} />
      <div>
        <p className='nd-article-content'>{articleData.content}</p>
      </div>
    </div>
  );
}

export default ArticleDetail;

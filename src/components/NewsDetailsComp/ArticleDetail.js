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

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }

  return (
    <div className='nd-article-wrapper'>
      <h2>{articleData.title}</h2>
      <div className='date-category-author'>
        <p>{formatDate(articleData.published)}</p>
        <div className='yellow-dot'></div>
        <p>{articleData.category}</p>
        <div className='yellow-dot'></div>
        <p>{articleData.author}</p>
      </div>
      <img src={articleData.imageUrl} />
      <div>
        <p className='nd-article-content'>{articleData.content}</p>
      </div>
      <div className='article-tags'>
        <div className='article-tag'>Tech</div>
        <div className='article-tag'>IT</div>
      </div>
    </div>
  );
}

export default ArticleDetail;

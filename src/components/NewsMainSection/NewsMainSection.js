import React, { useState, useEffect } from 'react';
import './newsMainSection.css'
import BlogPost from '../BlogSection/BlogPost'

const NewsMainSection = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      fetch('https://win23-assignment.azurewebsites.net/api/articles')
        .then((response) => response.json())
        .then((data) => setArticles(data));
    }, []);

  return (
    <div className='container'>
        <h2>Our News & Articles</h2>
        <div className='article-container'>
            {
                articles.map((article) => (
                    <BlogPost key={article.id} articleId={article.id} imgUrl={article.imageUrl} publishedDate={article.published} category={article.category} title={article.title} content={article.content} />
                ))
            }
        </div>
        <div className='slide-selector'>
            <p>1/1 page(s)</p>
        </div>
    </div>
  )
}

export default NewsMainSection
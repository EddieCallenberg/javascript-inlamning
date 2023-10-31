import React, { useState, useEffect } from 'react';
import Button from '../../components/generics/Button'
import BlogPost from './BlogPost'

const BlogSection = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      // Hämta data från API:et när komponenten monteras
      fetch('https://win23-assignment.azurewebsites.net/api/articles')
        .then((response) => response.json())
        .then((data) => setArticles(data));
    }, []);
  
    const displayedArticles = articles.slice(0, 3);

  return (
    <section>
        <div className="container">
          <div className="blog-section">
            <h2>Articles &amp; News</h2>
            <div className="hthree-and-btn">
              <h3>Get Every Single Article &amp; News</h3>
              <Button type="btn-black" title="Browse Articles" url="/news" />
            </div>
            <div className="article-cards">
              {
                displayedArticles.map((article) => (
                    <BlogPost key={article.id} articleId={article.id} imgUrl={article.imageUrl} publishedDate={article.published} category={article.category} title={article.title} content={article.content} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
  )
}

export default BlogSection
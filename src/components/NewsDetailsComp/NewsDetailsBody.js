import React, { useState, useEffect } from 'react';
import ArticleDetail from './ArticleDetail'
import './NewsDetails.css'
import BlogPostAlt from '../BlogSection/BlogPostAlt';
import { Link } from 'react-router-dom';


const NewsDetailsBody = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      fetch('https://win23-assignment.azurewebsites.net/api/articles')
        .then((response) => response.json())
        .then((data) => setArticles(data));
    }, []);
  
    const displayedArticles = articles.slice(0, 4);

  return (
    <div className='container ctnr'>
        <ArticleDetail />
        <div className='nd-body-right'>
            <i className='fa-solid fa-search'></i>
            <input type='text' />
            <div className='recent-posts'>
                <h3>Recent Posts</h3>
                {
                    displayedArticles.map((article) => (
                        <BlogPostAlt key={article.id} articleId={article.id} publishedDate={article.published} title={article.title} />
                    ))
                }
            </div>
            <div className='article-categories'>
                <h5>Categories</h5>
                <div className='categories-links'>
                    <div className='category-row'><Link to="/news/technology">Technology -</Link><p>20 posts</p></div>
                    <div className='category-row'><Link to="/news/freelancing">Freelancing -</Link><p>7 posts</p></div>
                    <div className='category-row'><Link to="/news/writing">Writing -</Link><p>16 posts</p></div>
                    <div className='category-row'><Link to="/news/marketing">Marketing -</Link><p>11 posts</p></div>
                    <div className='category-row'><Link to="/news/business">Business -</Link><p>35 posts</p></div>
                    <div className='category-row'><Link to="/news/education">Education -</Link><p>14 posts</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsDetailsBody
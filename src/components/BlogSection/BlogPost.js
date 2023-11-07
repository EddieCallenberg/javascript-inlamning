import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ articleId, imgUrl, publishedDate, category, title, content }) => {
  return (
    <div className="article-wrapper">
      <Link to={`/news/${articleId}`}>
        <div className="background-img">
          <img src={imgUrl} alt={`Picture for ${title}`} />
          <div className="date">
            <p className="date-nr">{new Date(publishedDate).getDate()}</p>
            <p className="date-month">{new Date(publishedDate).toLocaleString('default', { month: 'short' })}</p>
          </div>
        </div>
        <p className="article-category">{category}</p>
        <h4 className="article-title">{title}</h4>
        <p className="article-text">{content}</p>
      </Link>
    </div>
  );
};

export default BlogPost;
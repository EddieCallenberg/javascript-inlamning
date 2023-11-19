import React from 'react'
import { Link } from 'react-router-dom';

const BlogPostAlt = ({articleId, publishedDate, title}) => {
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
      }

  return (
    <div className="alt-article-wrapper">
      <Link to={`/news/${articleId}`}>
        <h4 className="article-title">{title}</h4>
        <p>{formatDate(publishedDate)}</p>
      </Link>
    </div>
  )
}

export default BlogPostAlt
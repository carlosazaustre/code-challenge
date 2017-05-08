import React from 'react';

import './Article.css';

const Article = (props) => (
  <article className="Card">
    <div className="Card-text">
      {props.excerpt}
    </div>
    <div className="Card-meta">
      <span>Author: <strong>{props.author}</strong></span>
    </div>
  </article>
);

export default Article;

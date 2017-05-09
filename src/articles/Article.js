import React from 'react';
import { Link } from 'react-router-dom';

import './Article.css';

const Article = (props) => (
  <article className="Card">
    <div className="Card-text">
      {props.excerpt}
    </div>
    <div className="Card-meta">
      <span>Author: <strong>{props.author}</strong></span>
    </div>
    <div className="Card-meta">
      <Link to={props.id}>Read more...</Link>
    </div>
  </article>
);

export default Article;

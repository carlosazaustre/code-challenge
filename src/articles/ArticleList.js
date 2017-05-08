import React from 'react';
import Article from './Article';

import './ArticleList.css';

const ArticleList = (props) => (
  <div className="CardList">
    {
      props.articles.map(article => (
        <Article
          key={article.id}
          {...article}
        />
      ))
    }
  </div>
);

export default ArticleList;

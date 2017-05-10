import actions from './actions';
import request from '../request';

import { ARTICLES_QUERY, ARTICLE_QUERY } from '../queries';

const fetchArticles = () => dispatch => {
  dispatch(actions.fetchArticlesInit())
    .then(() => {
      request(ARTICLES_QUERY)
        .then(response => dispatch(actions.fetchArticlesSuccess(response.data.articles)))
        .catch(error => dispatch(actions.fetchArticlesFailure(error)));
    });
};

const fetchUniqueArticle = articleId => dispatch => {
  dispatch(actions.fetchUniqueArticleInit())
    .then(() => {
      request(ARTICLE_QUERY(articleId))
        .then(response => dispatch(actions.fetchUniqueArticleSuccess(response.data.article)))
        .catch(error => dispatch(actions.fetchUniqueArticleFailure(error)));
    });
};

export default {
  fetchArticles,
  fetchUniqueArticle,
};

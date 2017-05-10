import types from './types';

const fetchArticlesInit = () => ({
  type: types.FETCH_ARTICLES_INIT,
});

const fetchArticlesSuccess = articles => ({
  type: types.FETCH_ARTICLES_SUCCESS,
  payload: {
    articles,
  },
});

const fetchArticlesFailure = error => ({
  type: types.FETCH_ARTICLES_FAILURE,
  payload: {
    error,
  },
});

const fetchUniqueArticleInit = () => ({
  type: types.FETCH_UNIQUE_ARTICLE_INIT,
});

const fetchUniqueArticleSuccess = article => ({
  type: types.FETCH_UNIQUE_ARTICLE_SUCCESS,
  payload: {
    article,
  },
});

const fetchUniqueArticleFailure = error => ({
  type: types.FETCH_UNIQUE_ARTICLE_FAILURE,
  payload: {
    error,
  },
});

export default {
  fetchArticlesInit,
  fetchArticlesSuccess,
  fetchArticlesFailure,
  fetchUniqueArticleInit,
  fetchUniqueArticleSuccess,
  fetchUniqueArticleFailure,
};

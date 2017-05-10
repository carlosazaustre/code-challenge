const initialState = {
  articles: [],
  current: {},
  error: null,
  loading: true,
};

export default function articlesReducer(state = initialState.articles, action) {
  switch (action.type) {
    default:
      return state;
  }
}

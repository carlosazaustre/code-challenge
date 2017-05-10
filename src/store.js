import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import * as articles from './articles/reducer';

export default function configureStore(initialState) {
  return createStore(
    combineReducers({
      articles,
    }),
    initialState,
    applyMiddleware(thunk),
  );
}

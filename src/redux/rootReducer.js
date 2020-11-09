import { combineReducers } from 'redux';
import appReducer from './appReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer
});

export default rootReducer;

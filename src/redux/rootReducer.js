import { combineReducers } from 'redux';
import appReducer from './reducers/appReducer';
import postsReducer from './reducers/postsReducer';

const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer
});

export default rootReducer;

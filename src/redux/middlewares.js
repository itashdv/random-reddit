import { PUT_POST } from './types';
import { fetchPostCache } from './actions';

export const preventIdenticalPosts = ({ dispatch, getState }) => {
  return next => {
    return action => {
      if (action.type === PUT_POST) {
        const state = getState();
        const { posts } = state.posts;
        for (let i = 0; i < posts.length; i++) {
          if (posts[i].id === action.payload.id) {
            const topic = action.payload.subreddit.toLowerCase();
            return dispatch(fetchPostCache(topic));
          }
        }
      }
      return next(action);
    }
  }
}

import { UPDATE_POSTS } from '../types';

const initialState = {
  topics: ['Frontend', 'ReactJS', 'VueJS', 'Angular'],
  posts: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postsReducer;

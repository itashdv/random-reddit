import { PUT_POST, UPDATE_POSTS } from './types';

const initialState = {
  topics: [
    { title: 'Frontend', cache: [] },
    { title: 'ReactJS', cache: [] },
    { title: 'VueJS', cache: [] },
    { title: 'Angular', cache: [] }
  ],
  posts: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postsReducer;

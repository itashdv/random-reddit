import {
  LOAD_POST,
  FETCH_POSTS,
  UPDATE_POSTS,
  LOAD_POSTS,
  LIKE_POST,
  REMOVE_POST,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT
} from './types';

export const loadPost = topic => ({ type: LOAD_POST, payload: topic });
export const fetchPosts = topic => ({ type: FETCH_POSTS, payload: topic });
export const updatePosts = posts => ({ type: UPDATE_POSTS, payload: posts });
export const loadPosts = () => ({ type: LOAD_POSTS });
export const likePost = id => ({ type: LIKE_POST, payload: id });
export const removePost = id => ({ type: REMOVE_POST, payload: id });
export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const showAlert = text => ({ type: SHOW_ALERT, payload: text });
export const hideAlert = () => ({ type: HIDE_ALERT });

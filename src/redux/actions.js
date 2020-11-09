import {
  FETCH_FROM_CACHE,
  FETCH_FROM_API,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  PUT_POST,
  LIKE_POST,
  REMOVE_POST,
  UPDATE_POSTS
} from './types';

export const fetchPostAPI = topic => ({ type: FETCH_FROM_API, payload: topic });
export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const showAlert = text => ({ type: SHOW_ALERT, payload: text });
export const hideAlert = () => ({ type: HIDE_ALERT });
export const putPost = post => ({ type: PUT_POST, payload: post });
export const updatePosts = posts => ({ type: UPDATE_POSTS, payload: posts });
export const fetchPostCache = topic => ({ type: FETCH_FROM_CACHE, payload: topic });
export const likePost = id => ({ type: LIKE_POST, payload: id });
export const removePost = id => ({ type: REMOVE_POST, payload: id });

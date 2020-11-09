import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import { getPosts } from '../selectors';
import {
  FETCH_FROM_CACHE,
  FETCH_FROM_API,
  LIKE_POST,
  REMOVE_POST
} from '../types';
import {
  fetchPostAPI,
  showLoader,
  hideLoader,
  showAlert,
  hideAlert,
  putPost,
  updatePosts
} from '../actions';
import {
  fetchFromCache,
  fetchFromAPI,
  saveToCache,
  selectRandomPost,
  likePost,
  removePost
} from '../../functions';

// fetching from cache..
function* fetchCacheWorker(action) {
  try {
    yield put(showLoader());
    yield put(hideAlert());
    const result = yield call(fetchFromCache, action.payload);
    const posts = yield select(getPosts);
    const post = yield call(selectRandomPost, action.payload, posts, result);
    yield put(putPost(post));
    yield put(hideLoader());
  } catch (err) {
    if (err === null) {
      yield put(fetchPostAPI(action.payload));
    }
    if (err === 'end') {
      yield put(showAlert('No more posts on chosen topic!'));
      yield put(hideLoader());
      yield delay(5000);
      yield put(hideAlert());
    }
  }
}
export function* fetchCacheWatcher() {
  yield takeLatest(FETCH_FROM_CACHE, fetchCacheWorker);
}

// fetching from API..
function* fetchAPIWorker(action) {
  try {
    yield put(showLoader());
    const data = yield call(fetchFromAPI, action.payload);
    const result = yield call(saveToCache, action.payload, data);
    const posts = yield select(getPosts);
    const post = yield call(selectRandomPost, action.payload, posts, result);
    yield put(putPost(post));
    yield put(hideLoader());
  } catch (err) {
    yield put(showAlert('ERROR: Something went wrong!'));
    yield put(hideLoader());
  }
}
export function* fetchAPIWatcher() {
  yield takeLatest(FETCH_FROM_API, fetchAPIWorker);
}

// liking a post..
function* postLikeWorker(action) {
  const posts = yield select(getPosts);
  const updatedPosts = yield call(likePost, action.payload, posts);
  yield put(updatePosts(updatedPosts));
}
export function* postLikeWatcher() {
  yield takeLatest(LIKE_POST, postLikeWorker);
}

// removing a post..
function* removePostWorker(action) {
  const posts = yield select(getPosts);
  const updatedPosts = yield call(removePost, action.payload, posts);
  yield put(updatePosts(updatedPosts));
}
export function* removePostWatcher() {
  yield takeLatest(REMOVE_POST, removePostWorker);
}

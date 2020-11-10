import { call, put, throttle, select } from 'redux-saga/effects';
import { getPosts } from '../../selectors';
import { CACHING_TIME } from '../../../consts';
import { LOAD_POST } from '../../types';
import {
  fetchPosts,
  showLoader,
  hideLoader,
  showAlert,
  hideAlert,
  updatePosts
} from '../../actions';

const loadPostHelper = topic => {
  return new Promise((resolve, reject) => {
    if (localStorage.getItem(topic)) {
      const cachedData = JSON.parse(localStorage.getItem(topic));
      const difference = Date.now() - cachedData.timestamp;
      const expired = difference > CACHING_TIME ? true : false;
      if (expired) {
        reject(null);
      } else {
        resolve(cachedData.data)
      }
    } else {
      reject(null);
    }
  });
}

const selectRandomPost = (posts, loadedPosts) => {
  return new Promise(resolve => {
    const index = Math.floor(Math.random() * loadedPosts.length);
    const post = loadedPosts[index];
    post.id = `${ post.id }/${ Date.now() }`;
    const result = [...posts, post];
    localStorage.setItem('posts', JSON.stringify(result));
    resolve(result);
  });
}

function* loadPostWorker(action) {
  try {
    yield put(showLoader());
    yield put(hideAlert());
    const loadedPosts = yield call(loadPostHelper, action.payload);
    const posts = yield select(getPosts);
    const result = yield call(selectRandomPost, posts, loadedPosts);
    yield put(updatePosts(result));
    yield put(hideLoader());
  } catch (err) {
    if (err === null) {
      yield put(fetchPosts(action.payload));
    } else {
      yield put(hideLoader());
      yield put(showAlert('Something went wrong!'));
    }
  }
}

export function* loadPostWatcher() {
  yield throttle(1000, LOAD_POST, loadPostWorker);
}

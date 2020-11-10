import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_POSTS } from '../../types';
import {
  updatePosts,
  showLoader,
  hideLoader
} from '../../actions';

const loadPostsHelper = () => {
  if (localStorage.getItem('posts')) {
    return JSON.parse(localStorage.getItem('posts'));
  } else {
    return [];
  }
}

function* loadPostsWorker(action) {
  yield put(showLoader());
  const result = yield call(loadPostsHelper);
  yield put(updatePosts(result));
  yield put(hideLoader());
}

export function* loadPostsWatcher() {
  yield takeEvery(LOAD_POSTS, loadPostsWorker);
}

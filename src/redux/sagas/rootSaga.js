import { all } from 'redux-saga/effects';
import { loadPostWatcher } from './post/load';
import { fetchPostsWatcher } from './post/fetch';
import { loadPostsWatcher } from './post/loadPosts';
import { likePostWatcher } from './post/like';
import { removePostWatcher } from './post/remove';

export default function* rootSaga() {
  yield all([
    loadPostWatcher(),
    fetchPostsWatcher(),
    loadPostsWatcher(),
    likePostWatcher(),
    removePostWatcher()
  ]);
}

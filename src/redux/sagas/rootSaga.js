import { all } from 'redux-saga/effects';
import {
  fetchCacheWatcher,
  fetchAPIWatcher,
  postLikeWatcher,
  removePostWatcher
} from './postSaga';

export default function* rootSaga() {
  yield all([
    fetchCacheWatcher(),
    fetchAPIWatcher(),
    postLikeWatcher(),
    removePostWatcher()
  ]);
}

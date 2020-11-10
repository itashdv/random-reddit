import { call, takeLatest, put, select } from 'redux-saga/effects';
import { getPosts } from '../../selectors';
import { REMOVE_POST } from '../../types';
import { updatePosts } from '../../actions';

const removePostHelper = (id, posts) => {
  return new Promise(resolve => {
    const arr = [...posts];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr.splice(i, 1);
      }
    }
    localStorage.setItem('posts', JSON.stringify(arr));
    resolve(arr);
  });
}

function* removePostWorker(action) {
  const posts = yield select(getPosts);
  const updatedPosts = yield call(removePostHelper, action.payload, posts);
  yield put(updatePosts(updatedPosts));
}

export function* removePostWatcher() {
  yield takeLatest(REMOVE_POST, removePostWorker);
}

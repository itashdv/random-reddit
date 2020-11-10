import { call, takeLatest, put, select } from 'redux-saga/effects';
import { getPosts } from '../../selectors';
import { LIKE_POST } from '../../types';
import { updatePosts } from '../../actions';

const likePostHelper = (id, posts) => {
  return new Promise(resolve => {
    const arr = [...posts];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr[i].liked = arr[i].liked ? false : true;
      }
    }
    localStorage.setItem('posts', JSON.stringify(arr));
    resolve(arr);
  });
}

function* likePostWorker(action) {
  const posts = yield select(getPosts);
  const updatedPosts = yield call(likePostHelper, action.payload, posts);
  yield put(updatePosts(updatedPosts));
}

export function* likePostWatcher() {
  yield takeLatest(LIKE_POST, likePostWorker);
}

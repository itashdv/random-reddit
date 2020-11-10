import { call, throttle, put } from 'redux-saga/effects';
import { API_URL } from '../../../consts';
import { FETCH_POSTS } from '../../types';
import {
  loadPost,
  hideLoader,
  showAlert
} from '../../actions';

const fetchPostsHelper = async topic => {
  const response = await fetch(`${ API_URL }/r/${ topic }.json`);
  const json = await response.json();
  const result = json.data.children.map(child => child.data);
  const dataToSave = { timestamp: Date.now(), data: result };
  localStorage.setItem(topic, JSON.stringify(dataToSave));
  return result;
}

function* fetchPostsWorker(action) {
  try {
    yield call(fetchPostsHelper, action.payload);
    yield put(loadPost(action.payload));
  } catch (err) {
    yield put(hideLoader());
    yield put(showAlert('Something went wrong!'));
  }
}

export function* fetchPostsWatcher() {
  yield throttle(1000, FETCH_POSTS, fetchPostsWorker);
}

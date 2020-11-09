import { API_URL } from './consts';
import { CACHING_TIME } from './consts';

// fetching data from cache..
export const fetchFromCache = key => {
  return new Promise((resolve, reject) => {
    if (localStorage.getItem(key)) {
      const cachedData = JSON.parse(localStorage.getItem(key));
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

// fetching data from API..
export const fetchFromAPI = async topic => {
  const response = await fetch(`${ API_URL }/r/${ topic }.json`);
  const json = await response.json();
  const result = json.data.children.map(child => child.data);
  return result;
}

// saving data to cache..
export const saveToCache = (key, value) => {
  return new Promise(resolve => {
    const dataToSave = { timestamp: Date.now(), data: value };
    localStorage.setItem(key, JSON.stringify(dataToSave));
    resolve(value);
  });
}

// selecting a random post..
export const selectRandomPost = async (topic, posts, loadedPosts) => {
  return new Promise((resolve, reject) => {
    const postsByTopic = posts.filter(post => post.subreddit.toLowerCase() === topic);
    if (postsByTopic.length === loadedPosts.length) {
      reject('end');
    }
    const randomPostIndex = Math.floor(Math.random() * loadedPosts.length);
    const selectedPost = loadedPosts[randomPostIndex];
    resolve(selectedPost);
  });
}

export const likePost = (id, posts) => {
  return new Promise(resolve => {
    const arr = [...posts];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr[i].liked = arr[i].liked ? false : true;
      }
    }
    resolve(arr);
  });
}

export const removePost = (id, posts) => {
  return new Promise(resolve => {
    const arr = [...posts];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr.splice(i, 1);
      }
    }
    resolve(arr);
  });
}

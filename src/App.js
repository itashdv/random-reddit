import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import List from './components/list/List';

const StyledApp = styled.div`
  max-width: 900px;
  margin: 40px auto;
`;

const App = () => {
  const TOPICS = ['Frontend', 'ReactJS', 'VueJS', 'Angular'];
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const saveState = arr => {
    console.log(arr);
    sessionStorage.setItem('posts', JSON.stringify(arr));
  };
  const likeAction = index => {
    const newArr = [...posts];
    if (newArr.length && newArr[index]) {
      newArr[index].data.liked = newArr[index].data.liked ? false : true;
      saveState(newArr);
      setPosts(newArr);
    } else {
      return;
    }
  };
  const removeAction = index => {
    const newArr = [...posts];
    if (newArr.length && newArr[index]) {
      newArr.splice(index, 1);
      saveState(newArr);
      setPosts(newArr);
    } else {
      return;
    }
  };
  useEffect(() => {
    const savedPosts = sessionStorage.getItem('posts') ? JSON.parse(sessionStorage.getItem('posts')) : null;
    if (savedPosts && Array.isArray(savedPosts)) {
      setPosts(savedPosts);
    }
  }, []);
  return (
    <StyledApp>
      <Header
        topics={ TOPICS }
        posts={ posts }
        setPosts={ setPosts }
        setLoading={ setLoading }
        saveState={ saveState }
      />
      <List
        posts={ posts }
        setPosts={ setPosts }
        loading={  loading}
        likeAction={ likeAction }
        removeAction={ removeAction }
      />
    </StyledApp>
  );
}

export default App;

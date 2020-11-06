import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Runner from './runner/Runner';

const StyledHeader = styled.header`
  width: 100%;
  /* border: 1px solid #c3c3c3; */
  margin-bottom: 20px;
`;

const Header = ({ topics, posts, setPosts, setLoading, saveState }) => {
  const [subreddit, setSubreddit] = useState(null);
  useEffect(() => {
    setLoading(true);
    if (!subreddit) {
      return setLoading(false);
    }
    let unmounted = false;
    const fetchPost = async () => {
      const response = await fetch(`https://www.reddit.com/r/${ subreddit }.json`);
      const result = await response.json();
      if (!unmounted) {
        const loadedPosts = result.data.children;
        // Choose a random post and push it to posts..
        const randomPostIndex = Math.floor(Math.random() * loadedPosts.length);
        const newArr = [...posts];
        newArr.push(loadedPosts[randomPostIndex]);
        saveState(newArr);
        setPosts(newArr);
        setLoading(false);
        return setSubreddit(null);
      }
    };
    fetchPost();
    return () => {
      unmounted = true;
    };
  }, [subreddit, setLoading, posts, setPosts, setSubreddit, saveState]);
  return (
    <StyledHeader>
      { topics.map((topic, index) => (
        <Runner key={ index } name={ topic } setSubreddit={ setSubreddit } />
      )) }
    </StyledHeader>
  );
};

export default Header;

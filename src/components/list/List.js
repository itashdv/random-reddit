import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getLoading, getPosts } from '../../redux/selectors';
import ListItem from './ListItem';
import Loader from '../reusables/Loader';

const StyledList = styled.ul`
  width: 100%;
  list-style-type: none;
`;

const List = () => {
  const loading = useSelector(getLoading);
  const posts = useSelector(getPosts);
  return (
    <StyledList>
      { posts.map(post => (
        <ListItem
          key={ post.id }
          post={ post }
        />
      )) }
      { loading && <Loader /> }
    </StyledList>
  );
};

export default List;

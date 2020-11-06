import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import Loader from '../reusables/Loader';

const StyledList = styled.ul`
  width: 100%;
  /* border: 1px solid #c3c3c3; */
  list-style-type: none;
`;

const List = ({ posts, setPosts, loading, likeAction, removeAction }) => {
  return (
    <StyledList>
      { posts.map((post, index) => (
        <ListItem
          key={ index }
          post={ post.data }
          index={ index }
          likeAction={ likeAction }
          removeAction={ removeAction }
        />
      )) }
      { loading && <Loader /> }
    </StyledList>
  );
};

export default List;

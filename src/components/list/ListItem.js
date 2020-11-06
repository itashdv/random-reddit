import React from 'react';
import styled from 'styled-components';
import LikeBtn from '../reusables/LikeBtn';
import DeleteBtn from '../reusables/DeleteBtn';

const StyledListItem = styled.li`
  /* border: 1px solid red; */
  margin: 8px auto;
  width: 800px;
  @media only screen and (max-width: 900px) { width: 600px; }
  @media only screen and (max-width: 620px) { width: 400px; }
  @media only screen and (max-width: 420px) { width: 300px; }
  @media only screen and (max-width: 320px) { width: 250px; }
`;

const Link = styled.a`
  color: #c1c1c1;
`;

const ListItem = ({ post, index, likeAction, removeAction }) => (
  <StyledListItem>
    <LikeBtn
      liked={ post.liked ? true : false }
      index={ index }
      likeAction={ likeAction }
    />
    <DeleteBtn index={ index } removeAction={ removeAction } />
    <Link href={ post.url } target="_blank">{ post.title }</Link>
  </StyledListItem>
);

export default ListItem;

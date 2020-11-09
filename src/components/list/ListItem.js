import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { likePost, removePost } from '../../redux/actions';
import LikeBtn from '../reusables/LikeBtn';
import DeleteBtn from '../reusables/DeleteBtn';

const StyledListItem = styled.li`
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

const ListItem = ({ post }) => {
  const dispatch = useDispatch();
  const likeAction = () => dispatch(likePost(post.id));
  const removeAction = () => dispatch(removePost(post.id));
  return (
    <StyledListItem>
      <LikeBtn
        liked={ post.liked ? true : false }
        likeAction={ likeAction }
      />
      <DeleteBtn removeAction={ removeAction } />
      <Link href={ post.url } target="_blank">{ post.title }</Link>
    </StyledListItem>
  );
};

export default ListItem;

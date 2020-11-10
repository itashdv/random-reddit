import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { likePost } from '../../redux/actions';

const StyledLikeBtn = styled.span`
  cursor: pointer;
  margin-right: 8px;
  color: red;
`;

const LikeBtn = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <StyledLikeBtn>
      <i
        onClick={ () => { dispatch(likePost(post.id)) } }
        className={ `fa fa-heart${ post.liked ? '' : '-o' }` }
        aria-hidden="true"
      >
      </i>
    </StyledLikeBtn>
  );
};

export default LikeBtn;

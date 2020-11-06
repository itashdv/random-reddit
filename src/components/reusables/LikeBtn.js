import React from 'react';
import styled from 'styled-components';

const StyledLikeBtn = styled.span`
  cursor: pointer;
  margin-right: 8px;
  color: red;
`;

const LikeBtn = ({ liked, index, likeAction }) => (
  <StyledLikeBtn>
    {
      liked
        ? <i onClick={ () => { likeAction(index) } } className="fa fa-heart" aria-hidden="true"></i>
        : <i onClick={ () => { likeAction(index) } } className="fa fa-heart-o" aria-hidden="true"></i>
    }
  </StyledLikeBtn>
);

export default LikeBtn;

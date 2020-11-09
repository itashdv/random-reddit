import React from 'react';
import styled from 'styled-components';

const StyledLikeBtn = styled.span`
  cursor: pointer;
  margin-right: 8px;
  color: red;
`;

const LikeBtn = ({ liked, likeAction }) => (
  <StyledLikeBtn>
    <i
      onClick={ likeAction }
      className={ `fa fa-heart${ liked ? '' : '-o' }` }
      aria-hidden="true"
    >
    </i>
  </StyledLikeBtn>
);

export default LikeBtn;

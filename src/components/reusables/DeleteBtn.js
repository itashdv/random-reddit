import React from 'react';
import styled from 'styled-components';

const StyledDeleteBtn = styled.span`
  cursor: pointer;
  margin-right: 16px;
  color: #c1c1c1;
`;

const DeleteBtn = ({ index, removeAction }) => (
  <StyledDeleteBtn>
    <i onClick={ () => { removeAction(index) } } className="fa fa-trash-o" aria-hidden="true"></i>
  </StyledDeleteBtn>
);

export default DeleteBtn;

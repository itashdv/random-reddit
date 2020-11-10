import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removePost } from '../../redux/actions';

const StyledDeleteBtn = styled.span`
  cursor: pointer;
  margin-right: 16px;
  color: #c1c1c1;
`;

const DeleteBtn = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <StyledDeleteBtn>
      <i
        onClick={ () => { dispatch(removePost(post.id)) } }
        className="fa fa-trash-o"
        aria-hidden="true"
      ></i>
    </StyledDeleteBtn>
  );
};

export default DeleteBtn;

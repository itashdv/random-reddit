import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getAlert } from '../../redux/selectors';

const StyledAlert = styled.p`
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  color: red;
  font-size: 16px;
`;

const Alert = () => {
  const message = useSelector(getAlert);
  return (
    <>
      { message && <StyledAlert>{ message }</StyledAlert> }
    </>
  );
}

export default Alert;

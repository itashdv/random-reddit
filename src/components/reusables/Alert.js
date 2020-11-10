import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getAlert } from '../../redux/selectors';

const StyledAlert = styled.p`
  text-align: center;
  color: red;
  height: 16px;
  font-size: 16px;
`;

const Alert = () => {
  const message = useSelector(getAlert);
  return <StyledAlert>{ message && message }</StyledAlert>;
}

export default Alert;

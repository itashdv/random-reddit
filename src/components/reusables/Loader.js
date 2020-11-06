import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto;
  width: 60px;
`;

const StyledCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
  animation: ${ props => `glow 1s infinite ${ props.delay }s` };
  @keyframes glow {
    0% { background: #9C1003; }
    50% { background: #D21502; }
    100% { background: #9C1003; }
  }
`;

const Circle = ({ delay }) => <StyledCircle delay={ delay } />;

const Loader = () => (
  <StyledLoader>
    <Circle delay={ 0 } />
    <Circle delay={ 0.4 } />
    <Circle delay={ 0.8 } />
  </StyledLoader>
);

export default Loader;

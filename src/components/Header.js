import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Runner from './runner/Runner';
import { getTopics } from '../redux/selectors';

const StyledHeader = styled.header`
  width: 100%;
  margin-bottom: 20px;
`;

const Header = () => {
  const topics = useSelector(getTopics);
  return (
    <StyledHeader>
      { topics.map((topic, index) => (
        <Runner key={ index } topic={ topic.title } />
      )) }
    </StyledHeader>
  );
};

export default Header;

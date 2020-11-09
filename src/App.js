import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import List from './components/list/List';
import Alert from './components/reusables/Alert';

const StyledApp = styled.div`
  max-width: 900px;
  margin: 40px auto;
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Alert />
      <List />
    </StyledApp>
  );
}

export default App;

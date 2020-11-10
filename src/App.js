import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ListComponent from './components/list/ListComponent';
import Alert from './components/reusables/Alert';
import Loader from './components/reusables/Loader';

const StyledApp = styled.div`
  max-width: 900px;
  margin: 40px auto;
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Alert />
      <Loader />
      <ListComponent />
    </StyledApp>
  );
}

export default App;

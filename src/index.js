import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/rootSaga';
import rootReducer from './redux/rootReducer';
import './index.css';
import App from './App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(
    sagaMiddleware
  ),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(rootSaga);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

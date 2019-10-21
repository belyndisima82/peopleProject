import React from 'react';
import PeopleList from './components/PeopleList';
import './App.scss';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import sagas from './redux/sagas';

function App() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store =
    createStore(
      combineReducers({
        ...reducers,
      }),
      {},
      composeEnhancers(applyMiddleware(sagaMiddleware)),
    );
  sagaMiddleware.run(sagas);
  return (
    <Provider store={store}>
      <PeopleList />
    </Provider>
  );
}

export default App;
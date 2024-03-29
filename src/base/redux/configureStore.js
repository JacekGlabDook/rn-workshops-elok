import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './reducers';

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
};
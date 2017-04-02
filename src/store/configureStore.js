import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';


const middleware = process.env.NODE_ENV !== 'production' ?
  [thunk, createLogger()] :
  [thunk, createLogger()];

// Dev tools
const enhancers = compose(
  applyMiddleware(...middleware),
  process.env.NODE_ENV !== 'production' && window.devToolsExtension
  ? window.devToolsExtension() : f => f
);

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    enhancers
  );
}

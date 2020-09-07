import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';
import logger from 'redux-logger'

const initialState = {}
const middleware = [thunk];
// middleware.push(logger)
const store = (context) => createStore(rootReducer, applyMiddleware(...middleware));

export const wrapper = createWrapper(store, {debug: true}); 
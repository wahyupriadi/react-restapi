import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

const initialState = {}
const middleware = [thunk];
const store = (context) => createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export const wrapper = createWrapper(store, {debug: false});

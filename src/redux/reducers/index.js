import 'redux';
import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import users from './users';

const combinedReducer = combineReducers({
    users
})

const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state) ({...nextState, state: state})// preserve count value on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

export default rootReducer;
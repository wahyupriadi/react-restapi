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
            ...state,
            ...action.payload,
        }
        console.log("old:", nextState)
        if (state) ({...nextState, state})
        console.log("new:", nextState)
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

export default rootReducer;
import 'redux';
import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import users from './users';

const rootReducer = combineReducers({
    users
})

// const rootReducer = (state, action) => {
//     console.log("rootReducer -> state", state);
//     console.log("rootReducer -> action.payload", action.payload)
//     if (action.type === HYDRATE) {
        
//         const nextState = {
//             ...state,
//             ...action.payload,
//         };
//         if (state) ({...nextState, state});
//         return nextState
//     } else {
//         return combinedReducer(state, action)
//     }
// }

export default rootReducer;
import "../actions"
import { GET_USER_ID, GET_USER_LIST } from "../actionTypes"

const initialState = {
    list: null,
    data: {
        id: null
    },
    error: false
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_ID:
            return {
                ...state, data: { ...state.data, id: action.payload }
            }
        case GET_USER_LIST:
            return {
                ...state, list: action.payload
            }
        default: return state;
    }
}

export default users;
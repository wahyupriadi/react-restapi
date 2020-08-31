import "../actionTypes"
import { GET_USER_ID, GET_USER_LIST } from "../actionTypes"

export const getUserId = (id) => {
    return ({
        type: GET_USER_ID,
        payload: id
    })
}

export const getUserList = () => {
    return ({
        type: GET_USER_LIST,
        payload: data
    })
}
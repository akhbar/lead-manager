import { CREATE_MASSAGES, GET_ERRORS } from './types'

export const createMessage = msg => {
    return {
        type: CREATE_MASSAGES,
        payload: msg
    }
}

// return error

export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: {
            msg, status
        }
    }
}
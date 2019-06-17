import { CREATE_MASSAGES } from '../actions/types'

const initialState = {}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_MASSAGES:
            return ( state =  action.payload)
        default:
            return state
    }
}
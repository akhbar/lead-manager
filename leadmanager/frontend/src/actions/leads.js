import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'
import { GET_LEAD, DELETE_LEAD, ADD_LEAD } from './types'

// GET LEADS

export const getLeads = () => (dispatch, getState) => {
    return axios.get('/api/leads/', tokenConfig(getState))
        .then(res =>{
            dispatch({
                type: GET_LEAD,
                payload: res.data
            })
        }).catch(err =>  dispatch(returnErrors(err.response.data, err.response.status)))
}

// DELETE LEADS

export const deleteLeads = (id) => (dispatch, getState) => {
    return axios.delete(`/api/leads/${id}`, tokenConfig(getState))
        .then(res =>{
            dispatch(createMessage({deleteLead: "lead Delete"}))
            dispatch({
                type: DELETE_LEAD,
                payload: id
            })
        }).catch(err => console.log(err))
}


// ADD LEADS

export const addLeads = lead => (dispatch, getState) => {
    return axios.post(`/api/leads/`, lead, tokenConfig(getState))
        .then(res =>{
            dispatch(createMessage({addLead: "lead added"}))
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            })
        }).catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
    )
}
import { actionTypes } from './actionTypes'
import API from '../Api'

export function getUsers() {
    return dispatch => {
        API.get('/users')
            .then(response => {
                
                dispatch({
                    type: actionTypes.GET_USERS,
                    payload: response
                })
            })
    }
}

export function postUsers(infoUser) {
    return dispatch => {
        API.post('/users', infoUser)
            .then(response => {
                dispatch({
                    type: actionTypes.POST_USERS,
                    payload: response
                })
            })
            .catch((error)=>{
                console.log('error',error)
            })
    }
}

export function deleteUser(idUser) {
    return dispatch => {
        API.delete('/users', idUser)
        .then(() => {
            dispatch({
                type: actionTypes.DELETE_USER,
                payload: idUser
            })
        })
        .catch((error) => {
            console.log('delete error', error);
        })
    }
}

export function updateUser(user) {
    return dispatch => {
        dispatch({
            type: actionTypes.UPDATE_USER,
            payload: user
        })
    }   
}
import * as actionTypes from './actionTypes'
import axios from '../axios-order'


export const getAllPosts = (posts) => {
    return {
        type: actionTypes.FETCH_USERS,
        ingredients: posts
    }
}

export const fetchUsers = () => {
    return dispatch => {
        axios.get( 'http://jsonplaceholder.typicode.com/users' )
        .then( response => {
            dispatch(getAllPosts(response.data))
            console.log('response action', response.data)
        })
    }
}
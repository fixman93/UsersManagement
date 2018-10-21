import * as actionTypes from './actionTypes'
import axios from '../axios-order'


export const getAlbums = (albums) => {
    return {
        type: actionTypes.FETCH_ALBUMS,
        albumList: albums
    }
}

export const fetchAlbums = () => {
    return dispatch => {
        axios.get( 'http://jsonplaceholder.typicode.com/albums' )
        .then( response => {
            dispatch(getAlbums(response.data))
            console.log('Response action', response.data)
        })
    }
}
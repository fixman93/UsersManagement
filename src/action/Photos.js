import * as actionTypes from './actionTypes'
import axios from '../axios-order'


export const getPhotos = (photos) => {
    return {
        type: actionTypes.FETCH_PHOTOS,
        photoList: photos
    }
}

export const fetchPhotos = () => {
    return dispatch => {
        axios.get( 'http://jsonplaceholder.typicode.com/photos' )
        .then( response => {
            dispatch(getPhotos(response.data))
            console.log('Response photos action', response.data)
        })
    }
}
import * as actionTypes from '../action/actionTypes'


const reducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_USERS:
        // action contains -> action.type = 'FETCH_POSTS'
        //                 -> action.ingredients = [<data for ingredients>]
            console.log('reducers user: ', action);
            return {
                ...state,
                // need to save the part of state per action
                ingredients: action.ingredients 
            }
        case actionTypes.FETCH_ALBUMS:
            console.log('reducer album', action)
            return {
                ...state,
                albums: action.albums
            }
        default:
            return state
    }
}

export default reducer
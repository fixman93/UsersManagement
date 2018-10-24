import React, { Component } from 'react'
import * as actions from '../../action/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import Style from './Photos.scss'

class Photos extends Component {

    state = {
        showPhotos: {},
        loading: false
    }

    componentDidMount() {
        this.props.showPhotos()
        console.log('photo props', this.props)
    }
    render() {
        let showPhotos = <p>Click album to show Photos</p>
        if(!this.state.loading && this.props.sendAlbumId) {
            showPhotos = this.props.photos.filter(u=>u.albumId === this.props.sendAlbumId).map(photo => (
                <li key={photo.id}>
                    <img id={photo.id} src={photo.thumbnailUrl} alt="..." />
                </li>
            ))
        }
        return (
            <ul className={Style.Photos}>
                {showPhotos}
            </ul>
        )
    }
}

Photos.defaultProps = {
    photos: []
}


Photos.propTypes = {
    photos: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return { photos: state.management.photoList}
}

const mapDispatchToProps = dispatch => {
    return {
        showPhotos: () => dispatch(actions.fetchPhotos())
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Photos)
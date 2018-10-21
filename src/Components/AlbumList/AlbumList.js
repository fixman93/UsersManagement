import React, { Component } from 'react'
import * as actions from '../../action/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class AlbumList extends Component {

    state = {
        showAlbums: {},
        loading: false
    }

    componentDidMount () {
        this.props.showAlbums()
        console.log('album::', this.props)
    }
    render() {
        let showAlbums = <p>Loading...</p>
        if(!this.state.loading) {
            showAlbums = this.props.albums.map(album => (
                <li key={album.id}>
                    <span>{album.title}</span>
                </li>
            ))
        }
        return (
            <ul>
                {showAlbums}
            </ul>
        )
    }
}

AlbumList.defaultProps = {
    albums: []
}


AlbumList.propTypes = {
    albums: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return { albums: state.management.albumList}
}

const mapDispatchToProps = dispatch => {
    return {
        showAlbums: () => dispatch(actions.fetchAlbums())
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AlbumList)
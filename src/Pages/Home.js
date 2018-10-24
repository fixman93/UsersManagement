import React, { Component } from 'react'
import PropTypes from 'prop-types';
import UserList from '../Components/UserList/UserList'
import AlbumList from '../Components/AlbumList/AlbumList'
import Photos from '../Components/Photos/Photos'

class Home extends Component {
    static propTypes = {
        showAlbumNumber: PropTypes.func,
        handleClickAlbumNumber: PropTypes.func
      }

      constructor(props) {
        super(props)
        this.state = {
            userId: null,
            albumId: null
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = id => {
        console.log('id', id)
        this.setState({userId: id})
    }

    handleClickAlbumNumber = id => {
        console.log('id photo', id)
        this.setState({albumId: id})
    }
    render() {
        console.log('all props', this.props)
        return (
            <div>
                <UserList showAlbumNumber={(userid) => this.handleClick(userid)}  />
                <AlbumList sendUserId={this.state.userId} showPhotoNumber={(albumId) => this.handleClickAlbumNumber(albumId)} />
                <Photos sendAlbumId={this.state.albumId} />
            </div>
        )
    }
}

export default Home
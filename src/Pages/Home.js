import React, { Component } from 'react'
import UserList from '../Components/UserList/UserList'
import AlbumList from '../Components/AlbumList/AlbumList'

class Home extends Component {
    render() {
        return (
            <div>
                <UserList />
                <AlbumList />
            </div>
        )
    }
}

export default Home
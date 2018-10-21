import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../action/index'
import PropTypes from 'prop-types';

import './UserList.css'

class UserList extends Component {
    state = {
        ShowUsers: {},
        loading: false
    }
    componentDidMount () {
        this.props.ShowAllPosts();
    }
    render() {
        let ShowUsers = <p>Loading...</p>
        if(!this.state.loading) {
            ShowUsers = this.props.posts.map(user => (
                <li key={user.id}>
                    <span>{user.name}</span>
                    <span>{user.username}</span>
                    <span>{user.email}</span>
                </li>
            ))
        }
        return (
            <ul>
                {ShowUsers}
            </ul>
        )
    }
}


// Props that are retrieved through redux need to have default props
// because they will look for a variable which hasn't yet been
// defined, the props need to have the same type as the one that's
// going to be loaded
UserList.defaultProps = {
    posts: []
}

// Good practice is to define prop-types for the props, so the app
// will fail in development if the given prop is not of the type
// specified
UserList.propTypes = {
    posts: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return { posts: state.management.ingredients }
  }

  const mapDispatchToProps = dispatch => {
    return {
        ShowAllPosts: () => dispatch(actions.fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
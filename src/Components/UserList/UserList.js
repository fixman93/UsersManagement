import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../action/index'

import './UserList.scss'

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ShowUsers: {},
            loading: false,
            userId: null,
            searchValue: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount () {
        this.props.ShowAllUsers();
        
    }

    handleChange = (event) => {
        this.setState({searchValue: event.target.value})
    }

    userList = (event) => {
        let updatedList = this.props.users;
        updatedList = updatedList.filter((item) =>{
          return item.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({searchValue: updatedList});
      }

      componentWillMount() {
        this.setState({searchValue: this.props.users})
      }
    render() {
        let ShowUsers = <p>Loading...</p>
        if(!this.state.loading) {
            this.state.searchValue && this.state.searchValue.length > 0 ? (
                ShowUsers = this.state.searchValue.map(user => (
                    <li key={user.id} onClick={() => this.props.showAlbumNumber(user.id)}>
                        <span>{user.name}</span>
                        <span>{user.username}</span>
                        <span>{user.email}</span>
                    </li>
                ))
            ) : ShowUsers = this.props.users.map(user => (
                <li key={user.id} onClick={() => this.props.showAlbumNumber(user.id)}>
                    <span>{user.name}</span>
                    <span>{user.username}</span>
                    <span>{user.email}</span>
                </li>
            ))
        }
        return (
            <div>
                <form>
                    <input type="text" placeholder='Search...' onChange={this.userList} />
                </form>
                <ul>
                    {ShowUsers}
                </ul>
            </div>
        )
    }
}


// Props that are retrieved through redux need to have default props
// because they will look for a variable which hasn't yet been
// defined, the props need to have the same type as the one that's
// going to be loaded
UserList.defaultProps = {
    users: []
}

// Good practice is to define prop-types for the props, so the app
// will fail in development if the given prop is not of the type
// specified
UserList.propTypes = {
    users: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return { users: state.management.ingredients }
  }

  const mapDispatchToProps = dispatch => {
    return {
        ShowAllUsers: () => dispatch(actions.fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
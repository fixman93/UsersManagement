import React, { Component } from 'react'
import * as actions from '../../action/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Pagination from '../../common/Pagination/Pagination'

import Style from './Photos.scss'

class Photos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPhotos: {},
            loading: false,
            ActivePhotos: [],
            pageOfItems: [],
            albumList: []
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        this.props.showPhotos()
        console.log('photo props', this.props)
    }

    onChangePage = (pageOfItems) =>{
        this.setState({ pageOfItems: pageOfItems });
    }
    // handlePhotoPagination = () => {
    //     this.setState({photoPagination: })
    // }
    // ActivePhoto = () => {
    //     this.props.photos
    //     .fiter(u=>u.albumId === this.props.sendAlbumId)
    //     .map(photo =>(
    //         photo.id
    //     ))
    // }
    render() {
        let showPhotos = <p>Click album to show Photos</p>
        if(!this.state.loading && this.props.sendAlbumId) {
            showPhotos = this.props.photos.filter(u=>u.albumId === this.props.sendAlbumId).map(photo => (
                <li key={photo.id}>
                    <img id={photo.id} src={photo.thumbnailUrl} alt="..." />
                </li>
            ))
        }
        console.log(showPhotos)
        let albumList = this.props.photos.filter(u=>u.albumId === this.props.sendAlbumId)
        
        console.log('dsadsadsadsa', this.state.albumList)
        return (
            <div>
                <div onClick={this.handlePhotoPagination}></div>
                <ul className={Style.Photos}>
                    {showPhotos}
                </ul>
                {/* {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.thumbnailUrl}</div>
                        )} */}
                <Pagination items={albumList} onChangePage={this.onChangePage} />
            </div>
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
import React, { Component } from 'react'
import * as actions from '../../action/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Pagination from '../../common/Pagination/Pagination'

import Styles from './Photos.scss'

class Photos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPhotos: {},
            loading: false,
            pageOfItems: []
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        this.props.showPhotos()
        console.log('photo props', this.props)
        console.log('example', this.state.photoPagination)
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }
    // handlePhotoPagination = () => {
    //     this.setState({photoPagination: })
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
        // let currentPhoto = this.props.photos.filter(u=>u.albumId === this.props.sendAlbumId)
        return (
            <div className={Styles.PhotoImage}>
                <div onClick={this.handlePhotoPagination}></div>
                <ul className={Styles.Photos}>
                    {/* {showPhotos} */}
                    {this.state.pageOfItems.map(photo =>
                        <li key={photo.id}>
                            <img id={photo.id} src={photo.thumbnailUrl} alt="..." />
                            <p>{photo.title}</p>
                        </li>
                    )}
                </ul>
                
                {this.props.showPhoto ? (<div><Pagination className={Styles.Pagination} items={this.props.photos} onChangePage={this.onChangePage} /></div>) : <div>Select an album first</div>}
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
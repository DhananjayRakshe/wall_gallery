import React from 'react';
import Photo from '../Photo/Photo'
import './PhotoContainer.css'

const PhotoContainer = props => {
    const displayPhotos = () => {
        return props.photos.map(photo => {
            return <Photo url = { photo.urls.regular } />;
        })
    }
    return (
        <div >
           <section className='gallery'>{ displayPhotos() }</section>
        </div>
    );
};

export default PhotoContainer;

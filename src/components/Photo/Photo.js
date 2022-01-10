import React from 'react';
import './Photo.css'

const Photo = (props) => {
    return (
        <div>
            <a data-fancybox="gallery" class="primary-btn" href={props.url}>
            <img className='wall__img' src={props.url} alt="Wall Gallery Photos" />
            </a>
            
        </div>
    );
}

export default Photo;

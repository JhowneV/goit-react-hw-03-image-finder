import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ photos, onClick }) => {
  return (
    <div className={css.imageGallery}>
      {photos.map(photo => (
        <ImageGalleryItem key={photo.id} photo={photo} onClick={onClick} />
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};





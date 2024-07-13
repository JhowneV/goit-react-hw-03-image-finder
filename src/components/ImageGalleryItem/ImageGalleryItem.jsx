import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photo, onClick }) => {
  return (
    <div className={css.imageGalleryItem} onClick={() => onClick(photo)}>
      <img src={photo.webformatURL} alt={photo.tags} className={css.image} />
    </div>
  );
};

ImageGalleryItem.propTypes = {
  photo: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

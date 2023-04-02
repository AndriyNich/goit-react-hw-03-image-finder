import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ gallery }) => {
  return (
    <ImageList>
      {gallery.map(elem => {
        return <ImageGalleryItem elem={elem} key={elem.id} />;
      })}
    </ImageList>
  );
};

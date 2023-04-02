import React from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ elem: { previewURL, tags } }) => {
  return (
    <GalleryItem>
      <Image src={previewURL} alt={tags} />
    </GalleryItem>
  );
};

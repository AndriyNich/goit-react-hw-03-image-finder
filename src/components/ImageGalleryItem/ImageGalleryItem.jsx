import React from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  elem: { previewURL, tags, largeImageURL },
  onClick,
}) => {
  const handleClick = () => {
    onClick({ url: largeImageURL, alt: tags });
  };

  return (
    <GalleryItem>
      <Image src={previewURL} alt={tags} onClick={handleClick} />
    </GalleryItem>
  );
};

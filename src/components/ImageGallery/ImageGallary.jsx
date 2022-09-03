import { Gallery } from './ImageGallery.styled';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(({ id, tags, webformatURL }) => {
        return <ImageGalleryItem key={id} image={webformatURL} tags={tags} />;
      })}
    </Gallery>
  );
};

//{ id, tags, webformatURL, largeImageURL }

import * as SC from './imageGalleryItem.stuled';

export const ImageGalleryItem = ({ tags, image }) => {
  return (
    <SC.ImageGalleryItem>
      <SC.Img src={image} alt={tags} />
    </SC.ImageGalleryItem>
  );
};

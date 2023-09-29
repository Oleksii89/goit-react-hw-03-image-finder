import {
  ImageGalleryItemImg,
  ImageGalleryItemLi,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  const { tags, webformatURL } = item;
  return (
    <ImageGalleryItemLi>
      <div>
        <ImageGalleryItemImg src={webformatURL} alt={tags} />
      </div>
    </ImageGalleryItemLi>
  );
};

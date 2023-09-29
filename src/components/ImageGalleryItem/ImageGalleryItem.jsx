import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  const { tags, webformatURL } = item;
  return (
    <StyledImageGalleryItem>
      <div>
        <StyledImageGalleryItemImg
          src={webformatURL}
          alt={tags}
          loading="lazy"
        />
      </div>
    </StyledImageGalleryItem>
  );
};

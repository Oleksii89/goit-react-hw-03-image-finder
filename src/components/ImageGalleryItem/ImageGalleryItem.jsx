import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item, onOpenModal }) => {
  const { largeImageURL, tags, webformatURL } = item;
  return (
    <StyledImageGalleryItem
      onClick={() => {
        onOpenModal({ largeImageURL, tags });
      }}
    >
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

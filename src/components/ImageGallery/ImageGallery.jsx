import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import { findImagesByText } from 'services/api';
import { ImageGalleryItemLi } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
  };

  fetchImagesById = async () => {
    try {
      this.setState({ isLoading: true });
      const imagesFromApi = await findImagesByText(this.props.searchText);

      this.setState({ images: imagesFromApi });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      prevProps.searchText !== this.props.searchText
    ) {
      this.fetchImagesById();
    }
  }
  render() {
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <ImageGalleryList>
        {showImages &&
          this.state.images.map(image => {
            return (
              <ImageGalleryItemLi
                key={image.id}
                item={image}
              ></ImageGalleryItemLi>
            );
          })}
      </ImageGalleryList>
    );
  }
}

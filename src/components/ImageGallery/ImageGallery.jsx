import { Component } from 'react';
import { StyledImageGalleryList } from './ImageGallery.styled';
import { findImagesByText } from 'services/api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      prevProps.searchText !== this.props.searchText
    ) {
      this.fetchImagesByText();
    }
  }

  fetchImagesByText = async () => {
    const { page } = this.state;
    try {
      this.setState({ isLoading: true });
      const imagesFromApi = await findImagesByText(this.props.searchText, page);

      this.setState(prevState => ({
        images:
          page === 1 ? imagesFromApi : [...prevState.images, ...imagesFromApi],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <>
        {this.state.isLoading && <Loader />}
        {this.state.error && <p>{this.state.error}</p>}
        <StyledImageGalleryList>
          {showImages &&
            this.state.images.map(image => {
              return <ImageGalleryItem key={image.id} item={image} />;
            })}
        </StyledImageGalleryList>
        {showImages && <Button onClick={this.handleLoadMore}>Load more</Button>}
      </>
    );
  }
}

import { Component } from 'react';
import { StyledImageGalleryList } from './ImageGallery.styled';
import { findImagesByText } from 'services/api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Erorr, Error } from 'components/Error/Error';

export class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    page: 1,
    // totalPages: 0,
    loadMore: false,
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
      // console.log(imagesFromApi.hits);

      this.setState(prevState => ({
        images:
          page === 1
            ? imagesFromApi.hits
            : [...prevState.images, ...imagesFromApi.hits],
        loadMore: page < Math.ceil(imagesFromApi.totalHits / 12),
        // totalPages: Math.floor(imagesFromApi.totalHits / 12),
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
    const { images, error, isLoading } = this.state;
    const showImages = Array.isArray(images) && images.length;

    return (
      <>
        {isLoading && <Loader />}
        {error && <Error>({error})</Error>}
        <StyledImageGalleryList>
          {showImages &&
            images.map(image => {
              return <ImageGalleryItem key={image.id} item={image} />;
            })}
        </StyledImageGalleryList>
        {showImages && this.state.loadMore && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
      </>
    );
  }
}

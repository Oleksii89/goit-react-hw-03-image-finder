import { Component } from 'react';
import { StyledImageGalleryList } from './ImageGallery.styled';
import { findImagesByText } from 'services/api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Error } from 'components/Error/Error';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    page: 1,
    loadMore: false,
    modal: {
      isOpen: false,
      data: null,
    },
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      prevProps.searchText !== this.props.searchText
    ) {
      if (this.state.error) {
        this.setState({ error: null });
      }
      const { page } = this.state;
      try {
        this.setState({ isLoading: true });
        const imagesFromApi = await findImagesByText(
          this.props.searchText,
          page
        );

        this.setState(prevState => ({
          images:
            page === 1
              ? imagesFromApi.hits
              : [...prevState.images, ...imagesFromApi.hits],
          loadMore: page < Math.ceil(imagesFromApi.totalHits / 12),
        }));
        if (imagesFromApi.hits.length === 0) {
          this.setState({
            error:
              'Sorry, there are no images matching your search query. Please try again.',
          });
        }
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  onOpenModal = modalData => {
    this.setState({
      modal: {
        isOpen: true,
        data: modalData,
      },
    });
  };
  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        data: null,
      },
    });
  };

  render() {
    const { images, error, isLoading } = this.state;
    const showImages = Array.isArray(images) && images.length > 0;

    return (
      <>
        {isLoading && <Loader />}
        {error && <Error>({error})</Error>}
        <StyledImageGalleryList>
          {showImages &&
            images.map(image => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  item={image}
                  onOpenModal={this.onOpenModal}
                />
              );
            })}
        </StyledImageGalleryList>
        {showImages && this.state.loadMore && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
        {this.state.modal.isOpen && (
          <Modal
            data={this.state.modal.data}
            onCloseModal={this.onCloseModal}
          />
        )}
      </>
    );
  }
}

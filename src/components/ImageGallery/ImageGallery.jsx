import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import { getImages } from 'services/getImages';

export class ImageGallery extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (
      this.state.page !== prevState.page ||
      prevProps.searchText !== this.props.searchText
    ) {
      getImages(this.props.searchText);
    }
  }

  render() {
    return <ImageGalleryList></ImageGalleryList>;
  }
}

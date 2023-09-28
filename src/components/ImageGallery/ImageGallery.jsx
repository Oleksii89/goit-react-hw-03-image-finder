import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      fetch();
    }
  }

  render() {
    return <ImageGalleryList></ImageGalleryList>;
  }
}

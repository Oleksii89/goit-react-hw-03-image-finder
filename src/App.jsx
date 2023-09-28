// import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';

export class App extends Component {
  state = {
    searchText: '',
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery searchText={this.state.searchText}>
          <ImageGalleryItem></ImageGalleryItem>
        </ImageGallery>
        {/* <Button></Button> */}
      </div>
    );
  }
}

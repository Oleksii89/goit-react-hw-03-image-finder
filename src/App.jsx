// import { Button } from 'components/Button/Button';
// import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';

export class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Searchbar />
        {/* <ImageGallery>
          <ImageGalleryItem></ImageGalleryItem>
        </ImageGallery> */}
        {/* <Button></Button> */}
      </div>
    );
  }
}

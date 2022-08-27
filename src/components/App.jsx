import { GlobalStyles } from './GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallary';
import { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <GlobalStyles />
      </>
    );
  }
}

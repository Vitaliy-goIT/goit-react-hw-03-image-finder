import { GlobalStyles } from './GlobalStyles';
import { fetchApi } from './searchApi/searchApi';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallary';
import { Component } from 'react';
import { Button } from './Button/Button';
import { Spinner } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  handleSearchQuery = query => {
    this.setState({ query, page: 1, images: [] });
  };

  fetchImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({
        loading: true,
      });
      const responce = await fetchApi(query, page);
      const destructRes = responce.map(
        ({ id, tags, webformatURL, largeImageURL }) => ({
          id,
          tags,
          webformatURL,
          largeImageURL,
        })
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...destructRes],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const {
      state: { loading, images },
      handleSearchQuery,
      loadMore,
    } = this;
    return (
      <>
        <Searchbar onSubmit={handleSearchQuery} />
        <ImageGallery images={images} />
        {loading && <Spinner />}
        {images.length > 0 && <Button onClick={loadMore} />}

        <GlobalStyles />
      </>
    );
  }
}

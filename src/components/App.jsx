import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { loadPictures } from '../servises/api';

const Status = {
  IDLE: 'idle',
  LOAD: 'load',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
    gallery: [],
    status: Status.IDLE,
    page: 0,
    search: '',
  };

  handleSearchSubmit = async search => {
    this.setState({ status: Status.LOAD, gallery: [] });
    const newPictures = await loadPictures(search, 1);
    this.setState({
      gallery: newPictures.hits,
      search,
      page: 1,
      status: Status.RESOLVED,
    });
  };

  handleMore = async () => {
    this.setState({ status: Status.LOAD });
    const newPictures = await loadPictures(
      this.state.search,
      this.state.page + 1
    );
    this.setState({
      gallery: [...this.state.gallery, ...newPictures.hits],
      page: this.state.page + 1,
      status: Status.RESOLVED,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery gallery={this.state.gallery} />
        {this.state.status === Status.LOAD && <Loader />}
        {this.state.status !== Status.LOAD &&
          this.state.gallery.length !== 0 && (
            <Button onClick={this.handleMore} />
          )}
      </div>
    );
  }
}

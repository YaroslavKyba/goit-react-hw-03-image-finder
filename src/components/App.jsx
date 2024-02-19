import { Component } from 'react';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';

import { requestImageByQuery } from '../services/api';
import { STATUSES } from 'utils/constants';

export class App extends Component {
  state = {
    image: null,
    status: STATUSES.idle,
    error: null,
    searchTerm: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchTerm !== this.state.searchTerm ||
      prevState.page !== this.state.page
    ) {
      this.fetchImageByQuery(this.state.searchTerm, this.state.page);
    }
  }

  fetchImageByQuery = async (searchTerm, page) => {
    try {
      this.setState({ status: STATUSES.pending });
      const image = await requestImageByQuery(searchTerm, page);
      this.setState({ image, status: STATUSES.success });
    } catch (error) {
      this.setState({ error: error.message, status: STATUSES.error });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const searchValue = event.currentTarget.searchInput.value;

    this.setState({ searchTerm: searchValue });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <Button onClick={this.handleLoadMore} />
      </div>
    );
  }
}

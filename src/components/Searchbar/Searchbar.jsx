import * as SC from './Searchbar.styled';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSearch = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
  };

  render() {
    const { handleSubmit, handleSearch, state } = this;
    return (
      <SC.Header>
        <SC.SearchForm onSubmit={handleSubmit}>
          <SC.SearchFormButton type="submit">
            <SC.SearchFormButtonLabel>
              <SC.Icon />
            </SC.SearchFormButtonLabel>
          </SC.SearchFormButton>

          <SC.SearchFormInput
            value={state.query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleSearch}
          />
        </SC.SearchForm>
      </SC.Header>
    );
  }
}

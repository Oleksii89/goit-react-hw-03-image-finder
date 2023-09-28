import { Component } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

export class Searchbar extends Component {
  state = { value: '' };

  handleChange = evt => {
    this.setState({ value: evt.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.handleSearch(this.state.value);
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton>
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            <FcSearch size="24" />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

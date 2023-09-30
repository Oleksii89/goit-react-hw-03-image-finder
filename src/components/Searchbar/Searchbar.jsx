import { Component } from 'react';
import {
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormButtonLabel,
  StyledSearchFormInput,
  StyledSearchbarHeader,
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
    this.setState({ value: '' });
  };

  render() {
    return (
      <StyledSearchbarHeader>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <StyledSearchFormButton>
            <StyledSearchFormButtonLabel>Search</StyledSearchFormButtonLabel>
            <FcSearch size="24" />
          </StyledSearchFormButton>

          <StyledSearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </StyledSearchForm>
      </StyledSearchbarHeader>
    );
  }
}

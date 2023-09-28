import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

export const Searchbar = () => {
  return (
    <SearchbarHeader>
      <SearchForm>
        <SearchFormButton>
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          <FcSearch size="24" />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

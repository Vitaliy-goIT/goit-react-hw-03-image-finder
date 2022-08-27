import * as SC from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <SC.Header>
      <SC.SearchForm>
        <SC.SearchFormButton type="submit">
          <SC.SearchFormButtonLabel>
            <SC.Icon />
          </SC.SearchFormButtonLabel>
        </SC.SearchFormButton>

        <SC.SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SC.SearchForm>
    </SC.Header>
  );
};

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  ButtonSearch,
  FormSearch,
  HeaderSearch,
  InputSearch,
  SpanSearch,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { search } = event.target.elements;
    onSubmit(search.value);
  };

  return (
    <HeaderSearch>
      <FormSearch onSubmit={handleSubmit}>
        <ButtonSearch type="submit">
          <AiOutlineSearch style={{ width: '24px', height: '24px' }} />
          <SpanSearch>Search</SpanSearch>
        </ButtonSearch>

        <InputSearch
          name="search"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </FormSearch>
    </HeaderSearch>
  );
};

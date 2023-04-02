import React from 'react';
import { LoadMore, Wraper } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <Wraper>
      <LoadMore type="button" onClick={onClick}>
        Load more
      </LoadMore>
    </Wraper>
  );
};

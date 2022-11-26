import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removebook } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const RemoveBookHandler = (id) => {
    dispatch(removebook(id));
  };

  return (
    <div>
      <h2>{ title }</h2>
      <h3>{ author }</h3>
      <button type="button">Comment</button>
      <button type="button" onClick={() => RemoveBookHandler(id)}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

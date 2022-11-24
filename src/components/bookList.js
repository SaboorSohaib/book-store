import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import { fetchBooksFromApi } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (

        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
    </div>
  );
};

export default BookList;

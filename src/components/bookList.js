import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import { GetBooks } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBooks());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      { books && books.map((book, index) => (

        <Book key={book + 1} title={book.title} author={book.author} id={index + 1} />
      ))}
    </div>
  );
};

export default BookList;

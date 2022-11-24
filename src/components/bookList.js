import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './book';
import { fetchBooksFromApi } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchBooksFromApi());
  } , []);

  return (
    <div>
      {books.map((book) => (

        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
    </div>
  );
};

export default BookList;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addbook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const AddBookHandler = (e) => {
    e.preventDefault();
    const book = {
      id: books.length + 1,
      title,
      author,
    };
    dispatch(addbook(book));
    setTitle('');
    setAuthor('');
  };

  const titleHandler = (e) => (setTitle(e.target.value));
  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="form-div">
      <form>
        <h3 className="new-book-title">Add New Book</h3>
        <input type="text" onChange={titleHandler} placeholder="Book Title" />
        <input type="text" onChange={authorHandler} placeholder="Author Name" />
        <button type="button" className="book-btn" onClick={AddBookHandler}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

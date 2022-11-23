import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/books/books';

const Addbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const AddBookHandler = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(AddBook(book));
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

export default Addbook;

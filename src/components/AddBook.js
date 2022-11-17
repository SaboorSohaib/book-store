import React from 'react';

const AddBook = () => (
  <div className="form-div">
    <form>
      <h3 className="new-book-title">Add New Boook</h3>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Author Name" />
      <button type="button" className="book-btn">Add Book</button>
    </form>
  </div>
);

export default AddBook;

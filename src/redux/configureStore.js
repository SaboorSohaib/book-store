import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './Categories/categories';

const store = configureStore({
  reducer: {
    books,
  },
});
export default store;

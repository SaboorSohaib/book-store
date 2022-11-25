/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/az6xTwvrC0uhFwCRj2LU/books';

export const addbook = createAsyncThunk(
  'book-store/redux/books/ADD_BOOK',
  async ({ id, title, author }) => {
    const mybook = { id, title, author };
    await axios.post(URL, {
      item_id: id, title, author, category: 'Fiction',
    });
    return mybook;
  },
);

export const removebook = createAsyncThunk('book-store/redux/books/REMOVE_BOOK', async (id) => {
  await axios.delete(`${URL}/${id}`);
  return id;
});

export const GetBooks = createAsyncThunk('book-store/redux/books/GET_BOOKS', async () => {
  const response = await axios.get(URL);
  return response.data;
});

const initialState = {
  books: [],
  loading: 'idle',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(GetBooks.fulfilled, (state, action) => {
      let data = [];
      if (action.payload.data === '') {
        data = [];
      } else {
        const books = Object.keys(action.payload).map((key, index) => {
          const book = action.payload[key][0];
          return {
            id: index + 1,
            ...book,
          };
        });
        data = books;
      }

      state.books = data;
    });

    builder.addCase(removebook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => (book.id !== action.payload));
    });

    builder.addCase(addbook.fulfilled, (state, action) => {
      state.books = [...state.books, {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      }];
    });
  },
});

export default booksSlice.reducer;

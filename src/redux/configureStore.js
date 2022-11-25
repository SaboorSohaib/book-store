// import { combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import CategoriesReducer from './categories/categories';
// import books from './books/books';

// const rootReducer = combineReducers({
//   CategoriesReducer,
//   books,
// });

// const store = configureStore({ reducer: rootReducer });
// export default store;
import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
// import categories from './Categories/categories';

const store = configureStore({
  reducer: {
    books,
  },
});
export default store;

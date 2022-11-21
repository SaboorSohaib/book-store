import { combineReducer, configureStore } from '@reduxjs/toolkit';
import CategoriesReducer from './categories/categories';
import books from './books/books';

const rootReducer = combineReducer({
    CategoriesReducer,
    books
});

const state = configureStore({reducer: rootReducer});
export default state;


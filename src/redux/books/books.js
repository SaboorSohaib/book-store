import { object } from "prop-types";

const GET_BOOKS = 'book-store/redux/books/GET_BOOKS';
const ADD_BOOK = 'book-store/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/redux/books/REMOVE_BOOK';

export default function books(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: action.id,
        title: action.title,
        author: action.author,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));
    case GET_BOOKS:
      return [...action.playload];
    default:
      return state;
  }
}

export function AddBook({ id, title, author }) {
  return {
    type: ADD_BOOK,
    id,
    title,
    author,
  };
}

export function RemoveBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}

export function GetBooks(playload){
  return {
    type: GET_BOOKS,
    playload,
  };
}

// Getting Data From API
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/01GJMY4PJFJHMY62VZ9QNGC8N8/books';

export const fetchBooksFromApi = () => async (dispatch) => {
  await fetch(URL)
  .then((response) => response.json())
  .then((data) => {

    const values = [];
    Object.values(data).map((x) => values.push({...x[0] }));

    const indexes = [];
    Object.keys(data).map((x, id) => indexes.push({
      id: x,
      title: values[id].title,
      author: values[id].author
    }));
    dispatch(GetBooks(indexes));
    });
};

export const addbook = (id, title, author) => async (dispatch) => {
  const myBooks = {
    book_id: id,
    title,
    author,
  };
  await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(myBooks),
  });
  dispatch(addbook(id, title, author));
};

export const removebook = (id) => async (dispatch) => {
  const booksDelete = { book_id: id };
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(booksDelete),
  });
  dispatch(removebook(id));
};


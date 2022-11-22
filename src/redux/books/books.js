const initialState = [];

const ADD_BOOK = 'book-store/books/ADDBOOK';
const REMOVE_BOOK = 'book-store/books/REMOVEBOOK';

export default function books(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: action.id,
        title: action.title,
        author: action.author,
      }];
    case REMOVE_BOOK:
      return state.map((book) => (action.id !== book.id));
    default:
      return state;
  }
}

export function AddBook(id, title, author) {
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

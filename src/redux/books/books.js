const initialState = [];

const ADDBOOK = 'book-store/books/ADDBOOK';
const REMOVEBOOK = 'book-store/books/REMOVEBOOK';

export default function books(state = initialState, action = {}) {
  switch (action.type) {
    case ADDBOOK:
      return [...state, {
        id: action.id,
        title: action.title,
        author: action.author,
      }];
    case REMOVEBOOK:
      return state.map((book) => (action.id !== book.id));
    default:
      return state;
  }
}

export function AddBook(id, title, author) {
  return {
    type: ADDBOOK,
    id,
    title,
    author,
  };
}

export function RemoveBook(id) {
  return {
    type: REMOVEBOOK,
    id,
  };
}

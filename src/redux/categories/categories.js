const initialState = [];

const CHECK_STATUS = 'book-store/categories/CHECKSTATUS';

export default function CategoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Building';
    default:
      return state;
  }
}

export function CheckStatus() {
  return {
    type: CHECK_STATUS,
  };
}

const initialState = [];

const CHECK_STATUS = 'book-store/redux/categories/CHECKSTATUS';

export default function CategoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}

export function CheckStatus() {
  return {
    type: CHECK_STATUS,
  };
}

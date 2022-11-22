const initialState = [];

const CHECKSTATUS = 'book-store/categories/CHECKSTATUS';

export default function CategoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under Building';
    default:
      return state;
  }
}

export function CheckStatus() {
  return {
    type: CHECKSTATUS,
  };
}

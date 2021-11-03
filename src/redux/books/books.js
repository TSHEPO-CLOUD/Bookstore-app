const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = { books: [] };

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
    { const books = [...state.books, action.payload];
      return { ...state, books }; }
    case REMOVE_BOOK: {
      const { books } = state;
      let newBooks = [];
      newBooks = books.filter((book) => book.id !== action.payload);
      return {
        books: [...newBooks],
      }; }
    default:
      return state;
  }
};

export default reducer;

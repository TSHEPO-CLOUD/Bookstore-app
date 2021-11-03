import api from '../../api/api';

const RECEIVE_BOOKS = 'bookStore/books/RECEIVE_BOOKS';

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books,
});

export const getBooks = () => (dispatch) => {
  api.getBooks().then((books) => {
    dispatch(receiveBooks(books));
    return books;
  });
};

export const addBook = (book) => (dispatch) => {
  api.addBook(book).then((response) => {
    if (response === 'Created') {
      dispatch(getBooks());
    }
    return response;
  });
};

export const removeBook = (book) => (dispatch) => {
  api.removeBook(book).then((response) => {
    if (response === 'The book was deleted successfully!') {
      dispatch(getBooks());
    }
    return response;
  });
};


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Page() {
  const { booksReducer } = useSelector((state) => state);
  const { books } = booksReducer;
  const [booksDisplay, setBooksDisplay] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (books !== booksDisplay) {
      setBooksDisplay(books);
    }
  });

  if (booksDisplay) {

  return (
    <div className="books-container">
      <div className="bookcard">
        <div className="book-left">
          <h4 className="book_genre">{category}</h4>
          <h3 className="title">{title}</h3>
          <h6 className="author">{author}</h6>
          <h6 className="progress">{progress}</h6>
          <div className="actions">
            <button type="button" className="btn-special">
              Comments
            </button>
            <button type="button" onClick={() => dispatch(removeBook(element.id))} className="btn-special">
              Remove
            </button>
            <button type="button" className="btn-special">
              Edit
            </button>
          </div>
        </div>
        <div className="book-center">
          <img src="./" alt="progress" className="progress" />
          <div className="data">
            <h3>{progress}</h3>
            <p>72%</p>
            <h5>Completed</h5>
          </div>
        </div>
        <div className="book-right">
          <div>
            <h3>Current chapter</h3>
            <h4>Chapter 22</h4>
            <h3>{progress}</h3>
          </div>
          <button type="button">Update Progress</button>
        </div>
      </div>

    </div>
  )};
};



Page.propTypes = {
  books: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    progress: PropTypes.bool,
  }),
};

Page.defaultProps = {
  books: {},
};

export default Page;

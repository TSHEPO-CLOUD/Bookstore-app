import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, addBook } from '../redux/api/api';

function Page() {
  const { booksReducer } = useSelector((state) => state);
  const { books } = booksReducer;
  const [booksDisplay, setBooksDisplay] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (books !== booksDisplay) {
      setBooksDisplay(books);
      dispatch(addBook(books));
    }
  });

  if (booksDisplay) {
    return (
      <div className="books-container">
        {booksDisplay.map((element) => (
          <div className="bookcard" key={element.title}>
            <div className="book-left">
              <h4 className="book_genre">{element.category}</h4>
              <h3 className="title">{element.title}</h3>
              <h6 className="author">{element.author}</h6>
              <div className="actions">
                <button type="button" className="btn-special">
                  Comments
                </button>
                <button type="button" onClick={() => dispatch(removeBook(element.item_id))} className="btn-special">
                  Remove
                </button>
                <button type="button" className="btn-special">
                  Edit
                </button>
              </div>
            </div>
            <div className="book-center">
              <div className="data">
                <h6>Completed</h6>
              </div>
            </div>
            <div className="book-right">
              <div>
                <h3>Current chapter</h3>
                <h3>0</h3>
              </div>
              <button type="button">Update Progress</button>
            </div>
          </div>
        ))}
      </div>

    );
  }
  return <h3>empty</h3>;
}

export default Page;

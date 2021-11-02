import React from 'react';

const books = [
  {
    category: 'Commedy',
    title: 'Hangover',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '64',
    },
  },
  {
    category: 'Olympics',
    title: 'Tokyo',
    author: 'Frank Herbert',
    progress: {
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      completed: '8',
    },
  },
  {
    category: 'Weather',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Introduction',
      completed: '0',
    },
  },
];

const Page = () => (
  <div className="books-container">
    {books.map((element) => (
      <div className="bookcard" key="element">
        <div className="book-left">
          <h4 className="book_genre">{element.category}</h4>
          <h3 className="title">{element.title}</h3>
          <h6 className="author">{element.author}</h6>
          <div className="actions">
            <button type="button" className="btn-special">
              Comments
            </button>
            <button type="button" className="btn-special">
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
            <h3>{element.progress.completed}</h3>
            <h6>Completed</h6>
          </div>
        </div>
        <div className="book-right">
          <div>
            <h3>Current chapter</h3>
            <h3>{element.progress.currentChapter}</h3>
          </div>
          <button type="button">Update Progress</button>
        </div>
      </div>
    ))}
  </div>
);

export default Page;

import React from 'react';

const Addbook = () => (
  <div>
    <h3>ADD NEW BOOK</h3>
    <div className="addbook">
      <input type="text" name="book-name" required placeholder="Book Title" />
      <select name="category">
        <option value="Action">Sports</option>
        <option value="Horror">Weather</option>
        <option value="Comedy">Comedy</option>
        <option value="Magic">Science Fiction</option>
      </select>
      <button type="button">ADD BOOK</button>
    </div>
  </div>
);

export default Addbook;

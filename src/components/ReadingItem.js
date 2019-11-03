import React from 'react';

const ReadingItem = ({ book, removeBookFromReadingList }) => {
  const onButtonClick = (event) => {
    event.preventDefault();
    removeBookFromReadingList(book);
  }
  return (
    <div>
      <a href={book.infoLink}>{book.title}</a>
      <button onClick={onButtonClick}>Remove</button>
    </div>
  );
};

export default ReadingItem;

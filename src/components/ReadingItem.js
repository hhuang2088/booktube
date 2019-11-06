import React from 'react';

const ReadingItem = ({ book, removeBookFromReadingList }) => {
  const onButtonClick = event => {
    event.preventDefault();
    removeBookFromReadingList(book);
  };
  return (
    <div className="ui segment">
      <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
        {book.title}
      </a>
      <br />
      <p>{`By: ${book.author}`}</p>
      <button className="ui red basic button" onClick={onButtonClick}>Remove</button>
    </div>
  );
};

export default ReadingItem;

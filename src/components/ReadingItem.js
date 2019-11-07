import React from 'react';
import getBookInfo from 'utils/getBookInfo';

const ReadingItem = ({ book, removeBookFromReadingList }) => {
  const bookInfo = getBookInfo(book);

  const onButtonClick = event => {
    event.preventDefault();
    removeBookFromReadingList(book);
  };
  return (
    <div className="ui segment">
      <a href={bookInfo.infoLink} target="_blank" rel="noopener noreferrer">
        {bookInfo.title}
      </a>
      <br />
      <p>{`By: ${bookInfo.author}`}</p>
      <button className="ui red basic button" onClick={onButtonClick}>Remove</button>
    </div>
  );
};

export default ReadingItem;

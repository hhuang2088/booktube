import React from 'react';
import getBookInfo from 'utils/getBookInfo';
import './BookItem.css';

const BookItem = ({ book, addBookToReadingList }) => {
  const bookInfo = getBookInfo(book);

  const onButtonClick = event => {
    event.preventDefault();
    addBookToReadingList(book);
  };

  return (
    <div className="book-item item">
      <img className="ui image" src={bookInfo.image} alt={bookInfo.title} />
      <div className="content">
        <a className="header" href={bookInfo.infoLink}>
          {bookInfo.title}
        </a>
        <div className="description">
          Author(s): {bookInfo.author.join(', ')}
          <br />
          Publisher: {bookInfo.publisher}
          <br />
          <button className="positive ui button" onClick={onButtonClick}>
            Add to Reading List
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;

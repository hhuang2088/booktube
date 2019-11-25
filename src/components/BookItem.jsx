import React from 'react';
import getBookInfo from 'utils/getBookInfo';
import bookIsInList from 'utils/bookIsInList';
import './BookItem.css';

const BookItem = ({ book, addBookToReadingList, readingList }) => {
  const bookInfo = getBookInfo(book);

  const onButtonClick = event => {
    event.preventDefault();
    addBookToReadingList(book);
  };

  const renderButton = (book, readingList) => {
    if (bookIsInList(book, readingList)) {
      return (
        <button className="positive ui button" disabled>
          Book Added
        </button>
      );
    } else {
      return (
        <button className="positive ui button" onClick={onButtonClick}>
          Add Book to Reading List
        </button>
      );
    }
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
          {renderButton(book, readingList)}
        </div>
      </div>
    </div>
  );
};

export default BookItem;

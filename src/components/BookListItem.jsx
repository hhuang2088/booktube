import React from 'react';
import getBookInfo from 'utils/getBookInfo';
import bookIsInReadingList from 'utils/bookIsInReadingList';
import './BookItem.css';

const BookItem = ({ book, addBookToReadingList, readingList }) => {
  const bookInfo = getBookInfo(book);

  const onAddBookButtonClick = event => {
    event.preventDefault();
    addBookToReadingList(book);
  };

  const renderAddBookButton = (book, readingList) => {
    if (bookIsInReadingList(book, readingList)) {
      return (
        <button className="positive ui button" disabled>
          Book Added
        </button>
      );
    }
    return (
      <button className="positive ui button" onClick={onAddBookButtonClick}>
        Add Book to Reading List
      </button>
    );
  };

  return (
    <div className="book-item item">
      <img className="ui image" src={bookInfo.image} alt={bookInfo.title} />
      <div className="content">
        <a className="header" href={bookInfo.infoLink}>
          {bookInfo.title}
        </a>
        <div className="description">
          Author(s): {bookInfo.authors.join(', ')}
          <br />
          Publisher: {bookInfo.publisher}
          <br />
          {renderAddBookButton(book, readingList)}
        </div>
      </div>
    </div>
  );
};

export default BookItem;

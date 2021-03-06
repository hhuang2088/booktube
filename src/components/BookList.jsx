import React from 'react';
import BookListItem from 'components/BookListItem';

const BookList = ({ books, addBookToReadingList, readingList }) => {
  if (!books) {
    return <div>Books not found, please enter another search term</div>;
  }
  if (books.length === 0) {
    return <div>Enter a search term</div>;
  }
  const firstFiveBooks = books.slice(0, 5);
  const displayBooks = firstFiveBooks.map(book => {
    return (
      <div className="ui grid">
        <BookListItem
          book={book}
          key={book.id}
          addBookToReadingList={addBookToReadingList}
          readingList={readingList}
        />
      </div>
    );
  });
  return <div className="ui relaxed celled list">{displayBooks}</div>;
};

export default BookList;

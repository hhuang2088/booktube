import React from 'react';
import ReadingItem from './ReadingItem';

const ReadingList = ({ readingList, removeBookFromReadingList }) => {
  const renderReadingItems = () => {
    return readingList.map(book => {
      return (
        <ReadingItem
          book={book}
          removeBookFromReadingList={removeBookFromReadingList}
        />
      );
    });
  };

  return (
    <div>
      <div className="ui center aligned segment">Reading List</div>
      {renderReadingItems()}
    </div>
  );
};

export default ReadingList;

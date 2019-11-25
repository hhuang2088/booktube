import React from 'react';
import ReadingItem from 'components/ReadingItem';

const ReadingList = ({
  readingList,
  removeBookFromReadingList,
  isReadingListShowing,
  toggleReadingList,
}) => {
  const renderReadingItems = () => {
    if (isReadingListShowing) {
      if (readingList.length === 0) {
        return (
          <div className="ui center aligned segment">
            <i>Reading List is empty</i>
          </div>
        );
      } else {
        return readingList.map(book => {
          return (
            <ReadingItem
              book={book}
              removeBookFromReadingList={removeBookFromReadingList}
            />
          );
        });
      }
    }
  };

  const renderHeading = () => {
    if (isReadingListShowing) {
      return 'Hide Reading List';
    } else {
      return 'Show Reading List';
    }
  };

  return (
    <div className="ui segments">
      <div
        className="ui center aligned segment"
        onClick={() => toggleReadingList()}
        style={{ cursor: 'pointer' }}
      >
        {renderHeading()}
      </div>
      {renderReadingItems()}
    </div>
  );
};

export default ReadingList;

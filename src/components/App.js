import React from 'react';
import googleBooks from 'apis/googleBooks';
import Searchbar from 'components/Searchbar';
import BookList from 'components/BookList';
import ReadingList from 'components/ReadingList';

class App extends React.Component {
  state = {
    books: [],
    readingList: [],
    isReadingListShowing: false,
  };

  addBookToReadingList = book => {
    const newReadingList = this.state.readingList;

    newReadingList.push(book);
    this.setState({ readingList: newReadingList });
    console.log(this.state.readingList);
  };

  toggleReadingList = () => {
    const { isReadingListShowing } = this.state;

    if (isReadingListShowing) {
      this.setState({ isReadingListShowing: false });
    } else {
      this.setState({ isReadingListShowing: true });
    }
  };

  removeBookFromReadingList = bookToBeRemoved => {
    const newReadingList = this.state.readingList.filter(book => {
      return book !== bookToBeRemoved;
    });

    this.setState({ readingList: newReadingList });
  };

  onFormSubmit = async term => {
    const response = await googleBooks.get('volumes', {
      params: {
        q: term,
      },
    });
    this.setState({ books: response.data.items });
  };

  render() {
    return (
      <div className="ui grid container">
        <div className="row">
          <div className="ten wide column">
            <Searchbar onFormSubmit={this.onFormSubmit} />
						<BookList
              books={this.state.books}
              addBookToReadingList={this.addBookToReadingList}
            />
          </div>
          <div className="six wide column">
            <ReadingList
              readingList={this.state.readingList}
              removeBookFromReadingList={this.removeBookFromReadingList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

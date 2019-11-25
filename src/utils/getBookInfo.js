const getBookInfo = book => {
  const bookInfo = {
    author: [],
    image:
      'http://www.formica.com/us/~/media/global-images/ui/noimageavailable.png',
    publisher: '',
    title: '',
    infoLink: '',
  };
  if (book) {
    if (book.volumeInfo) {
      if (book.volumeInfo.authors) {
        bookInfo.author = book.volumeInfo.authors;
      }
      if (book.volumeInfo.imageLinks) {
        if (book.volumeInfo.imageLinks.thumbnail) {
          bookInfo.image = book.volumeInfo.imageLinks.thumbnail;
        }
      }
      if (book.volumeInfo.publisher) {
        bookInfo.publisher = book.volumeInfo.publisher;
      }
      if (book.volumeInfo.title) {
        bookInfo.title = book.volumeInfo.title;
      }
      if (book.volumeInfo.infoLink) {
        bookInfo.infoLink = book.volumeInfo.infoLink;
      }
    }
  }
  return bookInfo;
};

export default getBookInfo;

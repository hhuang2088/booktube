import noImage from '../images/noImage.jpg';

export default book => {
  const bookInfo = {
    authors: [],
    image: noImage,
    publisher: '',
    title: '',
    infoLink: '',
  };

  if (book === undefined) {
    return bookInfo;
  }

  if (book.volumeInfo) {
    const { authors, imageLinks, publisher, title, infoLink } = book.volumeInfo;
    bookInfo.authors = authors ? authors : bookInfo.authors;
    bookInfo.image = imageLinks ? imageLinks.thumbnail : bookInfo.image;
    bookInfo.publisher = publisher ? publisher : bookInfo.publisher;
    bookInfo.title = title ? title : bookInfo.title;
    bookInfo.infoLink = infoLink ? infoLink : bookInfo.title;
  }
  return bookInfo;
};

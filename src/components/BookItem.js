import React from 'react';
import './BookItem.css';

const getBookInfo = (book) => {
	const bookInfo = {
		author: [],
		image: 'http://www.formica.com/us/~/media/global-images/ui/noimageavailable.png',
		publisher: '',
		title: '',
		infoLink: ''
	};
		if (book.volumeInfo)
		{
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
	return (bookInfo);
}

const BookItem = ({book}) => {
	const bookInfo = getBookInfo(book);
	return(
		<div className="book-item item">
			<img
				className="ui image"
				src={bookInfo.image}
				alt={bookInfo.title}
			/ >
			<div className="content">
				<a className="header" href={bookInfo.infoLink}>{bookInfo.title}</a>
				<div className="description">
					Author(s): {bookInfo.author.join(', ')}
					<br />
					Publisher: {bookInfo.publisher}
				</div>
			</div>
		</div>
	)
}

export default BookItem

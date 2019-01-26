import React from 'react';
import './BookItem.css';

const BookItem = ({book}) => {
	return(
		<div className="book-item item">
			<img
				className="ui image"
				src={book.volumeInfo.imageLinks.thumbnail}
				alt={book.volumeInfo.title}
			/ >
			<div className="content">
				<a className="header" href={book.volumeInfo.infoLink}>{book.volumeInfo.title}</a>
				<div className="description">
					Author(s): {book.volumeInfo.authors.join(', ')}
					<br />
					Publisher: {book.volumeInfo.publisher}
				</div>
			</div>
		</div>
	)
}

export default BookItem

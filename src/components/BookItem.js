import React from 'react';
import getBookInfo from 'utils/getBookInfo';
import './BookItem.css';

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

export default BookItem;

import React from 'react';
import BookItem from './BookItem';

const BookList = ({books}) => {
	if (!books) {
		return <div>Books not found, please enter another search term</div>;
	}
	if (books.length === 0) {
		return <div>Enter a search term</div>;
	}
	const displayBooks = books.map((book) => {
		return(<BookItem book={book} key={book.id}/>)
	})
	return(
		<div className="ui relaxed celled list">
			{displayBooks}
		</div>
	)
}

export default BookList;

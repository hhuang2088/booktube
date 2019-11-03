import React from 'react';
import BookItem from 'components/BookItem';

const BookList = ({ books, addBookToReadingList }) => {
	if (!books) {
		return <div>Books not found, please enter another search term</div>;
	}
	if (books.length === 0) {
		return <div>Enter a search term</div>;
	}
	const firstFiveBooks = books.slice(0, 5);
	const displayBooks = firstFiveBooks.map((book) => {
		return(
			<BookItem 
				book={book} 
				key={book.id} 
				addBookToReadingList={addBookToReadingList} 
			/>
		)
	})
	return(
		<div className="ui relaxed celled list">
			{displayBooks}
		</div>
	)
}

export default BookList;

import React from 'react';
import googleBooks from 'apis/googleBooks';
import Searchbar from 'components/Searchbar';
import BookList from 'components/BookList';

class App extends React.Component {
	state = {
		books: [],
		readingList: [],
	};

	addBookToReadingList = (book) => {
		const newReadingList = this.state.readingList;
		
		newReadingList.push(book);
		this.setState({ readingList: newReadingList });
		console.log(this.state.readingList);
	};

	onFormSubmit = async (term) => {
		const response = await googleBooks.get('volumes',{
			params: {
				q: term
			}
		})
		this.setState({books: response.data.items});
	};

	render() {
		return (
			<div className="ui container">
				<Searchbar onFormSubmit={this.onFormSubmit}/>
				<BookList 
					books={this.state.books} 
					addBookToReadingList={this.addBookToReadingList}
				/>
			</div>
		)
	};
}

export default App;

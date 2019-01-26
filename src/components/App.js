import React from 'react';
import googleBooks from '../apis/googleBooks';
import Searchbar from './Searchbar';
import BookList from './BookList';

class App extends React.Component {
	state = {books: []};

	onFormSubmit = async (term) => {
		const response = await googleBooks.get('volumes',{
			params: {
				q: term
			}
		})
		console.log(response.data.items);
		this.setState({books: response.data.items});
	};

	render() {
		return (
			<div className="ui container">
				<Searchbar onFormSubmit={this.onFormSubmit}/>
				<BookList books={this.state.books} />
			</div>
		)
	}
}

export default App;

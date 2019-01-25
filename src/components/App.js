import React from 'react';
import googleBooks from '../apis/googleBooks';
import Searchbar from './Searchbar';

class App extends React.Component {
	state = {books: []};

	onFormSubmit = async (term) => {
		const response = await googleBooks.get('volumes',{
			params: {
				q: term
			}
		})
		console.log(response);
	};

	render() {
		return (
			<div className="ui container">
				<Searchbar onFormSubmit={this.onFormSubmit}/>
			</div>
		)
	}
}

export default App;

import React from 'react';

class Searchbar extends React.Component {
	state = {term: ''};

	onSubmit = (event) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
		this.setState({term: ""});
	}

	onChange = (event) => {
		this.setState({term: event.target.value});
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onSubmit} className="ui form">
					<div className="field">
						<input
							type="text"
							value={this.state.term}
							onChange={this.onChange}
							placeholder="Search for a book"
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default Searchbar;

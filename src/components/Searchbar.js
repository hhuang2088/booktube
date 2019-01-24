import React from 'react';

class Searchbar extends React.Component {
	state = {term: ''};

	onSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.term);
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
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default Searchbar;

import React, { Component } from 'react';

// use a class-based component to make it more dynamic
class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state={term: ''};
	}

	// controlled components: value is a controlled element. Value is set by state
	// value is the attribute of the input bar
	render() {
		return  (
			<div className="search-bar">
				<input 
				value = {this.state.term}
				onChange = {event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
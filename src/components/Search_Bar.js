import React, { Component }  from  'react';

class SearchBar extends Component {
	constructor(props) { 
		super(props);

		this.state = {term: ''};
	} //end constructor

		render() {
			const placeHolderTerm = " Please enter your YouTube Search Criteria"
			return (
				<div className="search-bar"> 
					<input 
						placeholder = {placeHolderTerm}
						value = {this.state.term}
						onChange={event => this.onInputChange(event.target.value) } 
					/>;
					
				</div>
			); //end return
		} //end render

		onInputChange(term) {
			this.setState({term});
			this.props.onSearchTermChange(term);
		}
 } //end class
 
export default SearchBar;
import React, {Component} from 'react';
import * as actions from '../actions';
import {fetchRecipes} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e){
		this.setState({
			term: e.target.value
		});
	}

	onFormSubmit(e){
		e.preventDefault();
		this.props.fetchRecipes(this.state.term);
	}
	render(){
		return(
			<form onSubmit={this.onFormSubmit}>
				<div className="input-group searchBar">
					<input
						type="text"
						className="form-control"
						placeholder="Search"
						value={this.state.term}
						onChange={this.onInputChange}
					/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-primary">Submit</button>
					</span>
				</div>
			</form>
		);
	}
}

// const mapDispatchToProps = dispatch => ({
// 	onFormSubmit: () => {
// 		dispatch(actions.fetchAPI)
// 	}
// })

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		fetchRecipes: (evt) => dispatch(fetchRecipes(evt.state.term))
// 	};
// };

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({fetchRecipes}, dispatch);
};
export default connect(null, mapDispatchToProps)(SearchBar);

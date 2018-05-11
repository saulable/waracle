import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../actions/index';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
// Home page component
class ViewCakes extends Component {
	// render
	constructor(props) {
		super(props);
		this.state = {
			cakes: []
		};
	}
	componentDidMount() {
		this.props.fetchRecipes();
	}

	renderList(items) {
		// const title = items.name;
		// const id = items.id;
		// const image = items.imageUrl;
		// const url = '/item/' + id;
		// return (
		// 	<li key={id} className="search-row">
		// 		<Link to={url}>
		// 			<img alt="" className="small-image" src={image} />
		// 			{title}
		// 		</Link>
		// 	</li>
		// );
		return _.map(this.props.cakerecipes, items => {
			return (
					<Link to={`/item/${items.id}`}>
				<li key={items.id} className="search-row">

						<img alt="" className="small-image" src={items.imageUrl} />
					<span>{items.name}</span>
				</li>
			</Link>);
		});
	}
	render() {
		return (
			<div className="wrapper">
				<ul className="cake-list">{this.renderList()}</ul>
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return bindActionCreators({ fetchRecipes }, dispatch);
};
function mapStateToProps({ cakerecipes }) {
	return { cakerecipes };
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewCakes);

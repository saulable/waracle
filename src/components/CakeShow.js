import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCake } from '../actions';

class CakeShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchCake(id);
	}
	backToState(){
		this.props.history.push('/');
	}
	render() {
		const { cake } = this.props;
		if (!cake) {
			return <div> Loading.... </div>;
		}
		return (
			<div className="container-fluid add-margi">
			<Link to="/view_all"> Back to the cakes, yum yum. </Link>

			<h2>Cake name: {cake.name}</h2>
			<img alt=""className="single-cake-image" src={cake.imageUrl} />
			<h3>Yum Rating:  {cake.yumFactor}</h3>
			<p>{cake.comment}</p>
			</div>

		);
	}
}

function mapStateToProps({cakerecipes}, ownProps){

	return { cake : cakerecipes[ownProps.match.params.id] };
}
export default connect(mapStateToProps, {fetchCake})(CakeShow);

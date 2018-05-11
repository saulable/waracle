import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../actions';

class Recipes extends Component{
	constructor(props){
		super(props);
	}

	renderList(items){
		const title = items.title;
		const picture = items.image_url;
		const url = items.source_url;
		const social_rank = items.social_rank;



		return(
			<li className="search-row" key={items.recipe_id}>
				<img src={picture} />
				{title}
			</li>
		);
	}

	render(){
		return (
			<div>
				<ul className="recipes">
					{this.props.forkrecipes ? this.props.forkrecipes.map(this.renderList) : []}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({forkrecipes}){
	return {forkrecipes: forkrecipes.recipes};
}

export default connect(mapStateToProps)(Recipes);

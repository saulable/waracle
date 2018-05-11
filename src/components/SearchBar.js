import React, {Component} from 'react';
import SearchBar from './search';
import Recipes from './recipes';
import LeftMenu from '../containers/menu_left';

// Home page component
export default class SearchPage extends Component {
	// render
	render() {
		return (
			<div>
				<div className="">
					<SearchBar />
					<Recipes />
				</div>
			</div>
		);
	}
}

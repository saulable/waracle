import React, {Component} from 'react';
import SearchBar from './search';
import Recipes from './recipes';
import LeftMenu from '../containers/menu_left';

// Home page component
export default class Home extends Component {
	// render
	render() {
		return (
			<div className="wrapper">
				This is the Home Page!
			</div>
		);
	}
}

import React from 'react';
import '../stylesheets/main.scss';
import LeftMenu from '../containers/menu_left';

// app component
export default class App extends React.Component {
	// render
	render() {
		return (
			<div className="wrapper wrapper-main">
				<LeftMenu />
				{this.props.children}

			</div>
		);
	}
}

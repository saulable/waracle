import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import '../stylesheets/main.scss';
import LeftMenu from '../containers/MenuLeft';
import Landing from './Home';
import ViewAllCakes from './ViewCakes';
import SubmitCake from './SubmitCake';
import CakeShow from './CakeShow';
// app component
export default class App extends React.Component {
	// render
	render() {
		return (

				<BrowserRouter>
					<div className="wrapper wrapper-main">
					<LeftMenu />
					<Route exact path="/" component={Landing}></Route>
					<Route exact path="/item/:id" component={CakeShow}></Route>
					<Route exact path="/view_all" component={ViewAllCakes}></Route>
					<Route exact path="/submit" component={SubmitCake}></Route>
						</div>
				</BrowserRouter>

		);
	}
}

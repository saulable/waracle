import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import MainContent from './main_content.js';
import Collapsible from './collapsible';

class LeftMenu extends Component{
	constructor(props){
		super(props);

		this.state = {
			isClosed: true
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		console.log(event.target);
		event.target.className = '-active';
		if (this.state.isClosed){
			this.setState({
				isClosed: false
			});
		}else{
			this.setState({
				isClosed: true
			});

		}
	}
	render(){
		const triggerClass = this.state.isClosed ?  this.props.closedClass : this.props.openClass;
		return (
			<nav id="sidebar">
				<Link to="/">
					<div className="sidebar-header">
						<h3>Recipe Finder</h3>
					</div>
				</Link>
				<ul className="left-nav list-unstyled components">

					<li><Link to="search">Search Recipes</Link></li>

					<Collapsible title="Weekly Journal">
						<li><a href="#">This Week</a></li>
						<li><a href="#">Past Weeks</a></li>

					</Collapsible>

					<Collapsible title="Annual Journal">
						<li><a href="#">This Year</a></li>
						<li><a href="#">Past Years</a></li>

					</Collapsible>

					<Collapsible title="Life Stories">
						<li><a href="#">Health</a></li>
						<li><a href="#">Mind</a></li>
						<li><a href="#">Work</a></li>
						<li><a href="#">Finances</a></li>
					</Collapsible>

					<li><a href="#" data-toggle="collapse" >Mission Statement</a></li>

				</ul>
			</nav>
		);
	}
}

LeftMenu.defaultProps = {
	openClass: 'collapse-open list-unstyled',
	closedClass: 'collapse list-unstyled'
};

function mapStateToProps({menu}){
	return {menu};
}
export default connect(mapStateToProps)(LeftMenu);

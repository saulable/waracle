import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import MainContent from './main_content.js';


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
		return (
			<nav id="sidebar">
				<Link to="/">
					<div className="sidebar-header">
						<h3>My Favourite Cakes</h3>
					</div>
				</Link>
				<ul className="left-nav list-unstyled components">

					<li><Link to="/view_all">View All Cakes</Link></li>
					<li><Link to="/submit">Submit Cakes</Link></li>
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

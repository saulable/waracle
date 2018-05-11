import React, {Component} from 'react';
import {connect} from 'react-redux';

class MainContent extends Component{
	render(){
		return (
	            <div id="content" className="main-content">
				<h2>Collapsible Sidebar Using Bootstrap 3 Collapsible Sidebar Using Bootstrap 3 Collapsible Sidebar Using Bootstrap 3</h2>
	            </div>
		);
	}
}

function mapStateToProps({main}){
	return {main};
}
export default connect(mapStateToProps)(MainContent);

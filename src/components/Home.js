import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Home page component
export default class Home extends Component {
	// render
	render() {
		return (
			<div className="wrapper">
				<div className="card" style={{width:'45%'}}>
					<img src="/img/cakes.png" className="card-img-top" alt=""/>
					<div className="card-body">
						<h5 className="card-title">Cake Directory</h5>
						<p className="card-text">
							Welcome to the world's best cake making app! Click below to view our cakes!
						</p>
						<Link to="view_all" className="btn btn-primary">
							View All Cakes!
						</Link>
					</div>
				</div>
				<div className="card" style={{width:'45%'}}>
					<img src="/img/submit.png" className="card-img-top"alt=""  />
					<div className="card-body">
						<h5 className="card-title">Submit a cake</h5>
						<p className="card-text">
							Interested in joining part of the viral trend of cakes? Click below and submit your favourite cake!
						</p>
						<Link to="/submit" className="btn btn-primary">
							Submit Cakes
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

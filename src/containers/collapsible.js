import React, { Component } from 'react';
import { Collapse, Well } from 'react-bootstrap';

class Collapsible extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	handleToggle(e) {
		e.preventDefault();
		this.setState({
			isExpanded: !this.state.isExpanded
		});
	}
	handleClick(e) {
		e.preventDefault();
		this.setState({
			open: !this.state.open
		});
	}
	render() {
		const { title, children } = this.props;
		const { isOpen } = this.state.open;

		return (
			<div>
				<li>
					<a
						href="#"
						onClick={e => this.handleClick(e)}
						data-toggle="collapse"
						aria-expanded={this.state.open}
					>
						{title}
					</a>
				</li>
				<div>
					<Collapse in={this.state.open}>
						<div>
							<Well>{children}</Well>
						</div>
					</Collapse>
				</div>
			</div>
		);
	}
}

export default Collapsible;

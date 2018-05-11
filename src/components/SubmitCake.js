import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCake } from '../actions';
import validateFilePath from '../utils/validateFilePath';

// Home page component
class CakeNew extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input className="form-control" type="text" {...field.input} />
				<div className="text-help">{touched ? error : ''}</div>
			</div>
		);
	}

	onSubmit(values) {
		console.log(values);
		this.props.createCake(values, () => {
			this.props.history.push('/');
		});

	}

	render() {
		const { handleSubmit } = this.props;

		return (
<div className="form-group submit-cake container-fluid">
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

				<Field
					label="Name for yer cake!"
					name="name"
					component={this.renderField}
				/>
				<Field label="Comment" name="comment" component={this.renderField} />
				<Field
					label="Yum Factor"
					name="yumFactor"
					component={this.renderField}
				/>
				<Field
					label="Image URL"
					name="imageUrl"
					component={this.renderField}
				/>
			<button type="submit" className="btn float-right btn-success">
					Submit
				</button>
				<Link to="/" className="btn pull-left btn-danger">
					Cancel
				</Link>

			</form>
</div>
		);
	}
}
function validate(values) {
	const errors = {};

	if (!values.name) {
		errors.name = 'Enter a title.';
	}
	if (!values.comment) {
		errors.comment = 'Enter a comment.';
	}
	if (!values.yumFactor || (values.yumFactor > 5 || values.yumFactor < 1)) {
		errors.yumFactor = 'Enter a yum rating between 1 and 5';
	}
	if (!values.imageUrl) {
		errors.imageUrl = 'Enter a URL for your image';
	}else {
		errors.imageUrl = validateFilePath(values.imageUrl || '')
	}



	// If errors is empty, the form is fine to submit
	// If errors has *any* properties, redux form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'CakeNewForm'
})(connect(null, { createCake })(CakeNew));

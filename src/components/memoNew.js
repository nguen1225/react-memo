import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

//Local Import
import { addMemo } from '../actions;'

//新規作成
class memoNew extends Component{
	renderField = (field) => {
		const { input, label, type, meta : {touched, error} } = field;
		return (
			<div>
				<input {...input} placeholder = {label} type />
				{touched && error && <span>{error}</span>}
			</div>
		);
	}

	onSubmit = (values) => {
		this.props.addMemo(values);
		this.props.history.push('/')
	}
}
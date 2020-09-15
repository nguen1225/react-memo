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

	render(){
		//redux-formではformのonSubmitにhandleSubmitを渡すことでformの送信の制御を行っている。
		//handleSubmitに関数を渡すと送信時に呼ばれるため、ここではonSubmitを指定している。
		const { handleSubmit, pristine, submitting, invalid } = this.props;
		return (
			<form onSubmit = { handleSubmit(this.onSubmit)}>
				<div>
					<field label = 'タイトル' name = 'title' type = 'text' component = { this.renderField } />
				</div>
				<div>
					<field label = 'メモ' name = 'memo', type = 'text' component = { this.renderField } />
				</div>
				<div>
					<input type = "submit" value = "追加" disabled = { pristine || submitting || invalid } />
					<Link to = "/" >キャンセル</Link>
				</div>
			</form>
		)
	}
}
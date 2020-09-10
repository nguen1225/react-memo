import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

//Local Import
import { getMemo, deleteMemo, updateMemo } from '../actions';

//編集画面
class memoShow extends Component {
	//ComponentがDOMツリーに追加された状態で呼び出される。
	componentDidMount() {
		const { id } = this.props.match.params;
		if( id ) this.props.getMemo(id);
	}

	renderField = (field) => {
		const { input, label, type, meta : { touched, error } } = field;
		return (
			<div>
				<input {...input} placeholder={label} type={type} />
				{touched && error && <span>{error}</span>}
			</div>
		);
	}
}
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'

const FIELDS = [
	{
		label: 'Survey Title',
		name: 'title',
		noValueError: 'You must provide a title'
	},
	{
		label: 'Subject Line',
		name: 'subject',
		noValueError: 'You must provide a subject'
	},
	{
		label: 'Email Body',
		name: 'body',
		noValueError: 'You must provide an email message '
	},
	{
		label: 'Recipient List',
		name: 'emails',
		noValueError: 'You must provide an email address'
	}
]
class SurveyForm extends Component {
	renderField() {
		return FIELDS.map(({ label, name }) => {
			return (
				<Field
					key={name}
					component={SurveyField}
					type='text'
					label={label}
					name={name}
				/>
			)
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderField()}
					<Link to='/surveys' className='red btn-flat white-text'>
						Cancel
					</Link>
					<button type='submit' className='teal btn-flat right white-text'>
						Next
						<i className='material-icons right'>done</i>
					</button>
				</form>
			</div>
		)
	}
}

function validate(values) {
	const errors = {}

	errors.emails = validateEmails(values.emails || '')

	FIELDS.forEach(({ name, noValueError }) => {
		if (!values[name]) {
			errors[name] = noValueError
		}
	})

	return errors
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm)

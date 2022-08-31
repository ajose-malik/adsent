import React from 'react'
import { connect } from 'react-redux'
import { formFields } from './formFields'
import { withRouter } from 'react-router-dom' // history props is derived using withRouter
import * as actions from '../../actions'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = formFields.map(({ name, label }) => {
		return (
			<div key={name}>
				<label htmlFor=''>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		)
	})

	return (
		<>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button
				className='yellow darken-3 white-text btn-flat'
				onClick={onCancel}
			>
				Back
			</button>
			<button
				onClick={() => submitSurvey(formValues, history)}
				className='green btn-flat right white-text'
			>
				<i className='material-icons right'>mail</i>
				Send Survey
			</button>
		</>
	)
}

function mapStateToProps({ form }) {
	return { formValues: form.surveyForm.values }
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))

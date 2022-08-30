import React from 'react'
import { connect } from 'react-redux'
import { formFields } from './formFields'

const SurveyFormReview = ({ onCancel, formValues }) => {
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
			<button className='yellow darken-3 btn-flat' onClick={onCancel}>
				Back
			</button>
		</>
	)
}

function mapStateToProps({ form }) {
	return { formValues: form.surveyForm.values }
}
export default connect(mapStateToProps)(SurveyFormReview)

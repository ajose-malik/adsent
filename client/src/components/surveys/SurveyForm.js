import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class SurveyForm extends Component {
	render() {
		return <>SurveyForm</>
	}
}

export default reduxForm({
	form: 'surveyForm'
})(SurveyForm)

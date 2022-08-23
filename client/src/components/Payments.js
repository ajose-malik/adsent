import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Payments = ({handleToken}) => {
	return (
		<StripeCheckout
			name='Adsent'
			description='5 Adsent Credit'
			amount={500}
			token={token => handleToken(token)}
			stripeKey={process.env.REACT_APP_STRIPE_KEY}
		>
			<button className='btn'>Add credits</button>
		</StripeCheckout>
	)
}

export default connect(null, actions)(Payments)

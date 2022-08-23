import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const Payments = () => {
	return (
		<StripeCheckout
			name='Adsent'
			description='5 Adsent Credit'
			amount={500}
			token={token => console.log(token)}
			stripeKey={process.env.REACT_APP_STRIPE_KEY}
		>
			<button className='btn'>Add credits</button>
		</StripeCheckout>
	)
}

export default Payments

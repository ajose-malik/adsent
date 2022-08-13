const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./config/keys')

const app = express()
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('accesssToken', accessToken)
		}
	)
)

app.get(
	'/auth/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
)

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`STARTED ON ${PORT}`))

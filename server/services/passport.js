const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
	const findUser = await User.findById(id)
	done(null, findUser)
})

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id })

			if (existingUser) {
				done(null, existingUser)
			} else {
				const newUser = await new User({ googleId: profile.id }).save()
				done(null, newUser)
			}
		}
	)
)

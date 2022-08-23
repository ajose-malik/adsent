const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()
app.use(bodyParser.json())

app.use(
	cookieSession({
		// Cookie Options
		name: 'adSentSession',
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
		// maxAge: 24 * 60 * 60 * 1000 // 24 hours
		keys: [keys.cookieKey]
	})
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`STARTED ON ${PORT}`))

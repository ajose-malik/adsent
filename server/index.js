const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./models/Users')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`STARTED ON ${PORT}`))

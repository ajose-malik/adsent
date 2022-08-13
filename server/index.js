const express = require('express')
require('./services/passport')
const mongoose = require('mongoose')
const keys  = require('./config/keys')

const app = express()
require('./routes/authRoutes')(app)

mongoose.connect(keys.mongoURI)
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`STARTED ON ${PORT}`))

const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config
const connectDB = require('./config/db')

connectDB()
const app = express()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use('/api/goals',require('./routes/goalRoutes'))

app.use(errorHandler)
app.listen(port, ()=>{ console.log(`App listening on port ${port}`)

})
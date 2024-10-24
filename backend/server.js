const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const PORT = process.env.PORT||5000
const {errorHandler} = require('./middleware/errorMiddleware')

// Connect to database
connectDB()

const app = express ()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(PORT, ()=> console.log(`Server stated on port ${PORT}`))

app.get('/', (req, res)=>{
    // res.send('Hello')
    res.status(200).json({message: 'Welcome to Support Desk API'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))
app.use(errorHandler)























// // Fetched all users
// app.get('/api/users', (req, res)=>{
//     // res.send('Hello')
//     res.status(200).json({message: 'All users fetched'})
// })

// // Sign up a new user
// app.post('/api/users', (req, res)=>{
//     res.status(201).json({message: 'New User Created'})
// })
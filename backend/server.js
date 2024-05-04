const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT||5000

const app = express ()

app.listen(PORT, ()=> console.log(`Server stated on port ${PORT}`))

app.get('/', (req, res)=>{
    // res.send('Hello')
    res.status(200).json({message: 'Welcome to Support Desk API'})
})

// Fetched all users
app.get('/api/users', (req, res)=>{
    // res.send('Hello')
    res.status(200).json({message: 'All users fetched'})
})

// Sign up a new user
app.post('/api/users', (req, res)=>{
    res.status(201).json({message: 'New User Created'})
})
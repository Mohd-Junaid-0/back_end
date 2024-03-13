
// import dot env file
require('dotenv').config()
// import express 
const express = require('express')
// start app by using express
const app = express()
// start port
const port = process.env.PORT

// start app for home page
app.get('/', (req, res)=>{
    res.send('hello world, i am backend application')
})
// start app for twitter
app.get('/twitter', (req, res)=>{
    res.send('hello twitter')
})
// for login 
app.get('/login', (req, res)=>{
    res.send('<h2>Please Login</h2>')
})
app.listen(process.env.PORT, ()=>{
    console.log(`app is running on ${port}`) 
})
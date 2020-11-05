// bring in express
const express = require('express')
const app = express() 
// set up port options
const port = process.env.PORT || 5000  
// create absolute paths
const path = require('path')  

// middleware
//static routes
app.use(express.static('./public'))

// route to home page *****************************
app.get('/', (request, response) =>{
response.sendFile(path.resolve('./index.html'))
})  

// blog-post routes  *******************************
app.get('/gym-wear', (request, response) => {
   response.sendFile(path.resolve('./public/blog-post-gym-wear.html'))
})  

app.get('/party', (request, response) => {
   response.sendFile(path.resolve('./public/blog-post-party.html'))
})  

app.get('/slacks', (request, response) => {
   response.sendFile(path.resolve('./public/blog-post-slacks.html'))
})  

// continue reading routes  ***********************
app.get('/crochet', (request, response) => {
   response.sendFile(path.resolve('./public/continue-reading-crochet.html'))
})  

app.get('/sweaters', (request, response) => {
   response.sendFile(path.resolve('./public/continue-reading-sweater-belt.html'))
})  

 // learn more routes  ****************************
app.get('/moobs', (request, response) => {
   response.sendFile(path.resolve('./public/learn-more-moobs.html'))
})  

app.get('/plaid', (request, response) => {
   response.sendFile(path.resolve('./public/learn-more-plaid.html'))
})  

// start the server
app.listen(port, () => { console.log(`Listening on port: ${port}`)})  
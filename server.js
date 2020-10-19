const express = require('express')
const path = require('path')  

const app = express() 
const port = process.env.PORT || 5000  


app.use(express.static(path.resolve('./client/build'))) 


app.get('*', (request, response) =>{
response.sendFile(path.resolve('./client/build/index.html'))
})  


app.listen(port, () => { console.log(`Listening on port: ${port}`)})  
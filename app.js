const express = require('express')
const app = express()

app.use(express.json())

app.use(express.static(__dirname+'/public'))

app.get('/', (req, res)=>{
    res.sendFile('index.html')
})

const swag_router = require('./routes/create_picture.router')
app.use('/create_swagger', swag_router)

module.exports = app
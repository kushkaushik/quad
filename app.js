const express = require('express')
const mongoose = require('mongoose')
const fetch = require("node-fetch")
const {URI} = require('./db')

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));



mongoose.connect(URI);
mongoose.connection.on('connected',()=>{
    console.log("Sucessfully connected to database")
})



require('./schema/myusers')
app.use(require('./router/first'))




app.listen(1000,()=>{
    console.log("Connected with 1000 port");
})


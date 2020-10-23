const express = require("express");
const http = require('http');
const path = require('path');
const app = express();
const port = process.env.PORT||9999;

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'build/index.html'))
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log("Server is running on port")
})
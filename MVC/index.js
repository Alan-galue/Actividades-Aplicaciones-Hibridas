const express = require('express');
const mongoose = require('mongoose')
const dotenv= require('dotenv');
const app = express();
const PORT = 1000;
dotenv.config();
const urldb= process.env.URI_DB;
mongoose.connect(urldb)
const db= mongoose.connection;
db.on('error', ()=>{
    console.error('ocurrio un error')
})
db.once('open', ()=>{
    console.log('conexion correcta')
})
app.use('/', (request, response) =>  {
response.send('<h1>API REST</h1>')
})

app.listen(PORT, () => {
    console.log("API EN EL PUERTO " + PORT )
})
const express = require('express');
const app = express();
const PORT = 1000

app.use('/', (request, response) =>  {
response.send('<h1>API REST</h1>')
})

app.listen(PORT, () => {
    console.log('API REST EN EL PUERTO ${PORT}')
})
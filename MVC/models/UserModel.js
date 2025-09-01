const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creamos el esquema
const EsquemaMain = new Schema({
    nombre : String,
    email : String,
    password :String,
    foto : String

});

// Definimos correctamente la instancia de User, luego lo exportamos.
const User = mongoose.model('User', EsquemaMain); // Recibe como parametro la instancia de EsquemaMain, con el array de objetos.
module.exports = User;

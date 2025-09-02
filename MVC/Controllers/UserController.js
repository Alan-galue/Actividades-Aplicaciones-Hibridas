const User = require('../models/UserModel');

const NewUser = async (req, response) => {

const {nombre, email, password, foto } = request.body;
const Usuario = new User({nombre, email, password, foto })
await Usuario.save()

};

const listarUsers = async (request, response) => {
    const usuarios = await User.find();
    response.json(usuarios);
    
}

module.exports = {NewUser, listarUsers};



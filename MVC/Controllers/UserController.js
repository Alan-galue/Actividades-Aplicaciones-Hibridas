const User = require('../models/UserModel');

const NewUser = async (req, response) => {

const {nombre, email, password, foto } = request.body;
const Usuario = new User({nombre, email, password, foto })
await Usuario.save()

};


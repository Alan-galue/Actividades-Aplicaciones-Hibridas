const express = require('express');
const {NewUser, listarUsers} = require('../Controller/UserController.js');
const router = express.Router;

// declaramos las rutas del usuario en general
router.get('/', listarUsers);
router.post('/', NewUser );
module.exports = router; 




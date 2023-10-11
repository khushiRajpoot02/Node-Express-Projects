const express = require('express');
const router = express.Router();
const authThentication = require('../middleware/authentication')
const {login, register} = require('../controller/auth');
router.post('/login',authThentication, login);
router.post('/register',register);
module.exports = router;
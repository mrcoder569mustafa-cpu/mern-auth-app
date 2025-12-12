const express = require('express');
const { Signup, Login } = require('../Controller/AuthController');

const { signupValidation, loginValidation} = require('../Middlewares/AuthValidation.js');
const router = express.Router(); // ✅ router object create



router.post('/login', loginValidation , Login);

router.post('/signup', signupValidation , Signup);

module.exports = router;

const express = require('express');
const router = express.Router();
const userAuth = require('../controllers/userAuth');


// User registration route
router.post('/register', userAuth.register);
// User login route
router.post('/login', userAuth.login);
// Export the router
module.exports = router;
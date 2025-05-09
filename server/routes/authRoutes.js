const express = require('express');
const { register, login, requestReset, resetPassword } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/reset', requestReset);
router.post('/reset/:token', resetPassword);

module.exports = router;

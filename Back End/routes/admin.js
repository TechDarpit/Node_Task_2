const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();

router.post('/signin', adminController.signIn);

module.exports = router;

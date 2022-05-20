const express = require('express');
const router = express.Router();

const users = require('../routes/userRoute')
const books = require('../routes/bookRoute')


router.use('/users', users);
router.use('/books', books);

module.exports = router;
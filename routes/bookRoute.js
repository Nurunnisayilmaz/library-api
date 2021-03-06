const express = require('express');
const router = express.Router();

const {bookValidate} = require('../middlewares/bookValidation')
const {allBooks,bookDetails,addNewBook} = require('../controllers/bookController')

router.get('/',allBooks);
router.get('/:id',bookDetails);
router.post('/',bookValidate(),addNewBook);


module.exports = router;
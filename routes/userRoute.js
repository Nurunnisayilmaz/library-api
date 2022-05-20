const express = require('express');
const router = express.Router();

const {validate} = require('../middlewares/userValidation')
const {allUsers,userDetails,addNewUser,borrowBook,returnBook} = require('../controllers/userController')

router.get('/',allUsers);
router.get('/:id',userDetails);
router.post('/',validate("user"),addNewUser);
router.post('/:idUser/borrow/:idBook',borrowBook);
router.post('/:idUser/return/:idBook',validate("score"),returnBook);

module.exports = router;
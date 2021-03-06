const express = require('express');


const UserController = require('../controllers/user-controller')
const userController = new UserController();

const router = new express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/create', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
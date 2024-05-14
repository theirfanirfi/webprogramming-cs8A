var express = require('express');
var UserController = require('../../controllers/UserController');

var userRouter = express.Router();

userRouter.get('/', UserController.index);
userRouter.get('/:id', UserController.get);
userRouter.post('/', UserController.create);
userRouter.put('/', UserController.update);
userRouter.delete('/', UserController.delete);

module.exports = userRouter;




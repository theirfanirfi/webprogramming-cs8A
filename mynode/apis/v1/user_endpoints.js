const express = require('express');
var user_data= require('../../data/users_data');
var {authWare} = require('./auth');

const userEndpoints = express.Router();

userEndpoints.use(authWare)


var UserController = require('../../controllers/UserController');

userEndpoints.get('/', UserController.index)
userEndpoints.post('/', UserController.create);
// userEndpoints.post('/', UserController.create);

userEndpoints.get('/:id', function(req, res){
    const id = req.params.id
    res.status(200).json({
        message: "record fetched successfully "+id,
    })
})




userEndpoints.delete('/', function(req, res){
    res.status(200).json({
        message: "record deleted successfully",
    })
})

userEndpoints.put('/', function(req, res){
    res.status(200).json({
        message: "record updated successfully",
    })
})

module.exports = userEndpoints;

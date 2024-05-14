var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
});

var usermodel = mongoose.model('User', UserSchema);
module.exports = usermodel;
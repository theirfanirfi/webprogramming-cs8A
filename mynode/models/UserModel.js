var mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		default: 'newuser'
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	}
})

module.exports = mongoose.model('User',userSchema);

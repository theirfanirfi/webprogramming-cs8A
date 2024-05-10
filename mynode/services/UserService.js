var Service= require('./Service');
var UserModel = require('../models/UserModel');

class UserService extends Service
{
    getUsers = async () => {
        let users = await UserModel.findOne({name: 'irfan', is_verified: true});
        // console.log(users);
        return {
            data: users,
        }
    }

    static getUserForSign = async (name, username) => { 
        return await UserModel.findOne({name: name, username: username});
    }

   static create = async (userObject) => {
        let user = new UserModel(userObject);
        return user.save()
    }
}

module.exports = UserService;
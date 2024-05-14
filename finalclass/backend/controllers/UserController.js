var UserService = require('../services/UserService');
class UserController {

    static index = async (req, res) => {
        let users = await UserService.get();
        res.json({
            users: users,
        })
    }

    static create = async (req, res) => {
        let body = req.body
        if(body.name =='' || body.email == '' || body.password == ''){
            res.json({"message": "parameters required"});
        }else {
           let isUser=  await UserService.create(body);
           res.json({
            user: isUser,
           })
        }
    }

    static update = (req, res) => {
    }

    static delete = (req, res) => {}
    static get = (req, res) => {}

}

module.exports = UserController;
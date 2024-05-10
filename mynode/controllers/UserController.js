var UserService = require('../services/UserService');

class UserController {

    static index = async (req, res) => {
        console.log('index user', req.user);
        let userService = new UserService;
        let users = await userService.getUsers()
            res.status(200).json({
                message: "users loaded",
                data: users.data,
            })
    }

    static create = async (req, res) => {
        var body = req.body;
        let user = await UserService.create(body);
        
        // console.log(isCreated);

            res.status(200).json({
                message: "record created successfully",
                data: user
            })
    }

}

module.exports = UserController
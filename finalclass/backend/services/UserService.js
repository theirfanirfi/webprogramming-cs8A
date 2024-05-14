var UserModel = require('../models/UserModel');

class UserService {

    static create = async (userObject) => {

        try{
            let isUserNameUnique = await UserModel.find({username: userObject.username});
            console.log('isUserNameUnique', isUserNameUnique);
            if(isUserNameUnique.length > 0) {
                return [null, "the username is already taken"];
            }else {
                let user = new UserModel(userObject);
                user.save()
                return [true, user]
            }


        }catch(e){
            console.log(e);
            return [null, e.message];
        }

    }

    static get = async () => {
        let users = await UserModel.find();
        return users;
    }
}

module.exports = UserService;
var jwt = require('jsonwebtoken');
var UserService = require('../../services/UserService');

var SECRET_KEY = 'ABCDDEDFHGK123455XYZabcdef';


async function signin(req, res){
    console.log(req.headers);
let body = req.body;
console.log(body);
let user  = await UserService.getUserForSign(body.name, body.username);
console.log('user', user);
if(user){
    let token = jwt.sign({name: user.name, username: user.username}, SECRET_KEY);
    res.status(200).json({
        message: "Logged in successfully",
        token: token
    })
}else {
    res.status(204).json({
        message: "Invalid credentials",
    }) 
}

}




function authWare(req, res, next){
let headers = req.headers;
if(headers.token){
    let decodedToken = jwt.verify(headers.token, SECRET_KEY);

    req.user = decodedToken;
    console.log(decodedToken);
    next();

}else {
    res.status(404).json({
        message: "Invalid credentials"
    })
}
}

module.exports = {signin, authWare};
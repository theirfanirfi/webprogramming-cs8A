var express = require('express');
var mongoose = require('mongoose');
var bodyParse = require('body-parser');
var {signin} = require('./apis/v1/auth');

var app = express();
app.use(bodyParse())
var userEndpoints = require('./apis/v1/user_endpoints');

const MONGO_DB = 'mongodb+srv://theirfanullah:irfan1234@cluster0.ef75mhz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


connectDb = async () => {
await mongoose.connect(MONGO_DB)
console.log('connected')

}

connectDb()

function check_request(req, res, next){
 if(1==1){
    next()
 } else {
    res.json({status: 204, message: "invalid token"});
 }  
}

app.use(check_request)

app.use('/api/v1/users', userEndpoints);

app.post('/api/v1/auth/signin', signin);




app.get('/', function(req, res ){
    res.json({message: 'application is up and running'});
// res.send('welcome to express');
});



app.listen(4000, ()=> {
    console.log('listening on 4000')
})
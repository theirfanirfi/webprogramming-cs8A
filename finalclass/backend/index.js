// 1st step
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var userRouter = require('./apis/v1/user_enpoints');
var connectDb = require('./db_connect');

//2nd step

var app = express();
app.use(bodyParser());
app.use(cors());
connectDb();

// endpoint

app.use('/api/v1/users/', userRouter);

app.get('/', function(req, res){
    res.json({"message": "Final class wrap up"});
});


//server run
app.listen(4000, () => {
    console.log("server running");
})
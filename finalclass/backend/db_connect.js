var mongoose = require('mongoose');

const MONGO_DB = 'mongodb+srv://theirfanullah:irfan1234@cluster0.ef75mhz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

async function connectDb(){

    try {
        await mongoose.connect(MONGO_DB);
        console.log('database connected')
    }catch(e) {
        console.log(e);
    }

}

module.exports = connectDb;
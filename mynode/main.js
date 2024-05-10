// let a = 20;
// let b = 10;

// function compare(a, b) {
// return new Promise((resolve, reject) => {
// fetch('https://jsonplaceholder.com/api/todos').then(res => {
//     if(res.statusCode === 200){
//         if(res.data){
//             resolve(res.data);
//         }
//     }else {
//         reject('')
//     }
// }).catch(res => reject(reject));
// })
// }


// compare(30, 40).then((res)=> console.log(res)).catch((err)=> console.log(err));

// console.log(module);

// var calculator = require('./calculator');

// console.log(calculator.sum(10,20));
// console.log(calculator.subtract(10,20));
// console.log(calculator.division(10,20));


function get(endpoint, callback){
     callback('request', 'response');
}

get('/', function(req, res){
console.log(req, res);
});





















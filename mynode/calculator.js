function sum(a, b){
    return a+b
}

function subtract( a, b){
    return a-b;
}
function division( a, b){
    return a/b;
}
// exports.division =  division;
// exports.sum =  sum;
// exports.subtract =  subtract;
module.exports = {
    sum, subtract, division
}
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim(" ");
console.log(input.toLowerCase()+"??!");

// 간단하게
// console.log( require("fs").readFileSync("/dev/stdin").toString().trim(" ").toLowerCase()+"??!" );
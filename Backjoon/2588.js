var fs = require("fs");
var [A, B] = fs.readFileSync("/dev/stdin").toString().split("\n");
var splitB = B.split("");
console.log(A * splitB[2]);
console.log(A * splitB[1]);
console.log(A * splitB[0]);
console.log(A*B);


// parsInt가 문제였나;
var fs = require("fs");
var [A, B, C] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
console.log(A + B + C);
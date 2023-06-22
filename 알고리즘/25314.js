var BITE = require("fs").readFileSync("/dev/stdin").toString().trim();
let TIMES = parseInt(BITE / 4);
let PRINT = "";
for (let i = 0; i < TIMES; i++) {
  PRINT += "long ";
}
PRINT += "int";
console.log(PRINT);
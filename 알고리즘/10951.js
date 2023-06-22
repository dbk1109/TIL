var TEST_CASE = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let PRINT = "";
for (let i = 0; i < TEST_CASE.length; i++) {
  let [A, B] = TEST_CASE[i].split(" ").map(Number);
  PRINT += A + B + "\n";
}
console.log(PRINT);
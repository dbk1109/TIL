var TEST_CASE = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let PRINT = "";
for (let i = 1; i <= TEST_CASE[0]; i++) {
  let [A, B] = TEST_CASE[i].split(" ").map(Number);
  PRINT += `Case #${i}: ${A} + ${B} = ${A + B}` + "\n"
}
console.log(PRINT);
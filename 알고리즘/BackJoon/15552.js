var TEST_CASE = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let COUNTS = TEST_CASE[0];
let PRINT = "";
for (let i = 1; i <= COUNTS; i++) {
  let [A, B] = TEST_CASE[i].split(" ").map(Number);
  PRINT += A + B;
  if(i != COUNTS) {PRINT += "\n"}
  // if빼고 TEST_CASE[0]로 바꿔도 됨.
}
console.log(PRINT);
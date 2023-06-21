var SCORE = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
if (90 <= SCORE) {
  console.log("A");
} else if (80 <= SCORE && 89 >= SCORE) {
  console.log("B");
} else if (70 <= SCORE && 79 >= SCORE) {
  console.log("C");
} else if (60 <= SCORE && 69 >= SCORE) {
  console.log("D");
} else {
  console.log("F");
}

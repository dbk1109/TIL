var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let T = Number(input[0]);
let Print = "";
for (let i = 1; i < T + 1; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  Print += A + B + `\n`;
}
console.log(Print);
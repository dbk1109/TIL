var N = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
let Print = 0;
for (let i = 1; i < N + 1; i++) {
  Print = Print + i;
}
console.log(Print);
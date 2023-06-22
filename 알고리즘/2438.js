var N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let PRINT = "";
for (let i = 1; i <= N; i++) {
  for (let e = 0; e < i; e++) {
    PRINT += "*";
  }
  PRINT += "\n";
}
console.log(PRINT);
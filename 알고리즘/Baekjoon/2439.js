var N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let PRINT = "";
for (let i = 1; i <= N; i++) {
  if (i < N) {
    for (let one = 0; one < N - i; one++) {
      PRINT += " ";
    }
  }
  for (let STAR = N - i; STAR < N; STAR++) {
    PRINT += "*";
  }
  PRINT += "\n";
}
console.log(PRINT);
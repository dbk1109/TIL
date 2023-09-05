var [H, M] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
let NewM = M - 45;
if (NewM < 0) {  H--;
  if (H < 0) {    H = H + 24;  }
  M = NewM + 60;
} else {
  M = NewM;
}
console.log(H + " " + M);
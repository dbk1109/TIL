var input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
let [D1, D2, D3] = [input[0], input[1], input[2]];

if (D1 == D2 && D1 == D3 && D2 == D3) {  // 다 같은경우
  console.log(10000 + D1 * 1000);
} else if (D1 != D2 || D1 != D3 || D2 != D3) {
  if (D1 == D2 || D1 == D3) {
    console.log(1000 + D1 * 100);
  } else if (D2 == D3) {
    console.log(1000 + D2 * 100);
  } else {
    var BIG_DICE = Math.max(...input);
    console.log(BIG_DICE * 100);
  }
}
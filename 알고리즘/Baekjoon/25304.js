var RECEIPT = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let TOTAL = parseInt(RECEIPT[0]);
let COUNTS = parseInt(RECEIPT[1]);
let PRINT = 0;
for (let i = 2; i <= COUNTS + 1; i++) {
  let [PRICE, QUANTITY] = RECEIPT[i].split(" ").map(Number);
  PRINT += PRICE * QUANTITY;
}
console.log (TOTAL == PRINT ? "Yes" : "No");

// RECEIPT에 parseInt가 먹여져 있었다.
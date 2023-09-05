//let [NOW, COOKTIME] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);  여기에 number를 넣으니 안됨
let [NOW, COOKTIME] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [NOW_H, NOW_M] = NOW.split(" ").map(Number);
//let NEW_MIN = NOW_M + COOKTIME;
//let NEW_H;
//let TIMES;

//if (NEW_MIN >= 60) {
//  TIMES = parseInt(NEW_MIN / 60);
//  NEW_MIN = NEW_MIN % 60;
//  NEW_H = NOW_H + TIMES;
//  if (NEW_H >= 24) {
//    NEW_H = 24 - NEW_H;
//  }
//}
//console.log(Math.abs(NEW_H), " ", NEW_MIN);
// 왜.. 런타임뜨지?

let TOTAL_MIN = NOW_H * 60 + NOW_M + Number(COOKTIME);
let COOK_ENDTIME_H = parseInt(TOTAL_MIN / 60);
let COOK_ENDTIME_M = parseInt(TOTAL_MIN % 60);
while (COOK_ENDTIME_H >= 24) {
  COOK_ENDTIME_H = COOK_ENDTIME_H - 24;
}
console.log(COOK_ENDTIME_H + " " + COOK_ENDTIME_M);
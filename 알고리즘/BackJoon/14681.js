//var [A, B] = require("fs").readFileSync(0).toString().split("\n");
//if ( A > 0 && B > 0) {
//  console.log("1");
//} else if ( A < 0 && B > 0) {
//  console.log("2");
//} else if ( A < 0 && B < 0) {
//  console.log("3");
//} else {
//  console.log("4");
//}
// 백준에선 오류가남

//if ( A > 0 ) {
//  console.log(B > 0 ? "1" : "4");
//} else {
//  console.log(B < 0 ? "2" : "3");
//}
// 이건 왜 안된거임;

const input = require("fs").readFileSync(0).toString().split("\n");
const [x, y] = input;

if (x > 0) {
  console.log(y > 0 ? 1 : 4);
} else {
  console.log(y > 0 ? 2 : 3);
}
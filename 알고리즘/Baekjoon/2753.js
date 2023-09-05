var YEAR = Number(require("fs").readFileSync("/dev/stdin").toString());
//if (YEAR % 4 == 0 && YEAR % 100 > 1) {
//    console.log("1");
//} else if(YEAR % 400 == 0) {
//    console.log("1");
//} else {
//    console.log("0");
//}

if ((YEAR % 4 == 0 && YEAR % 100 > 1) || YEAR % 400 == 0) {
  console.log("1");
} else {
  console.log("0");
}
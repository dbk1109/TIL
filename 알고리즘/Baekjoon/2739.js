var N = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
//let Print = N + ' * 1 = ' + (N * 1) + '\n' + N + ' * 2 = ' + (N * 2) + '\n' + N + ' * 3 = ' + (N * 3) + '\n' + N + ' * 4 = ' + (N * 4) + '\n' + N + ' * 5 = ' + (N * 5) + '\n' + N + ' * 6 = ' + (N * 6) + '\n' + N + ' * 7 = ' + (N * 7) + '\n' + N + ' * 8 = ' + (N * 8) + '\n' + N + ' * 9 = ' + (N * 9);
//console.log(Print);
// 코드가 더럽고 가독성이 좋지 않음.

let Print = "";
for (let i = 1; i < 10; i++) {
  Print += `${N} * ${i} = ${N * i}`;
  if (i != 9) {
    Print += `\n`;
  }
}
console.log(Print);
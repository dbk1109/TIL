//직각삼각형 출력하기
//readline 모듈이 백준처럼 있어야한다는거에서 처음 좀 헤메게 되었다.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
let input = [];
rl.on('line', function (line) { input = line.split(' '); }).on('close', function () {
    const n = Number(input[0]);
    for(let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
});


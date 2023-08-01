//문자열 밀기
function solution(A, B) {
  A = A.split("");
  let counter = 0;
  for (let i = 0; i < A.length; i++) {
    if (A.join("") != B) {
      A.unshift(A.pop());
      counter++;
    } else {
      return counter;
    }
  }
  return -1;
}
// 미쳤다 이게 뭐냐; 어떻게 이런생각을 하냐..
//let solution=(a,b)=>(b+b).indexOf(a)

//종이 자르기
function solution(M, N) {
  return M * N - 1;
}

//연속된 수의 합
function solution(num, total) {
    var answer = [];
    for (let i = total % num != 0? -parseInt(num/2)+1 : -parseInt(num/2); i <= (num/2); i++){
        answer.push(parseInt(total/num)+i);
    }
    return answer;
}

//다음에 올 숫자
function solution(common) {
    let isSame = common[0] - common[1] == common[1] - common[2] && common[0] - common[1] == common[common.length-2] - common[common.length-1];
    return isSame ? common[common.length-1]+(common[1] - common[0]) : (
        common.length > 1 ? common[common.length-1] * common[common.length-1] / common[common.length-2] : 0
    )
}
/// 다 비슷한데 조금 더 줄일 수 있는 부분이 있었을듯.

/** 
 * 여기부터는 입력받는 항목이 달라짐
 * 상단에 이 내용이 공통으로 들어간다
 * 
 * const readline = require("readline");
 * const rl = readline.createInterface({
 *   input: process.stdin,
 *   output: process.stdout,
 * });
 * let input = [];
 */

//문자열 출력하기
rl.on("line", function (line) {  input = [line];
}).on("close", function () {
  str = input[0];
  console.log(str);
});
/// 이건 뭘 했다기보다 console.log 배우라고 있는건가

//a와 b 출력하기
rl.on("line", function (line) {  input = line.split(" ");
}).on("close", function () {
  console.log("a = " + Number(input[0]) + "\nb = " + Number(input[1]));
});

//문자열 반복해서 출력하기
rl.on('line', function (line) {  input = line.split(' ');
}).on('close', function () {
  str = input[0];
  n = Number(input[1]);
  console.log(str.repeat(n))
});


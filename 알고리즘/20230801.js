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

//대소문자 바꿔서 출력하기
rl.on("line", function (line) {
  input = line.split("");
}).on("close", function () {
  str = "";
  for (n of input) {
    n == n.toUpperCase() ? (str += n.toLowerCase()) : (str += n.toUpperCase());
  }
  console.log(str);
});
/// 아 이걸 맨날 놓치네
//console.log([...str].map((e=>/[A-Z]/.test(e)?e.toLowerCase():e.toUpperCase())).join(""));

//특수문자 출력하기
rl.on("close", function () {
  console.log("!@#$%^&*(\\'\"<>?:;");
});

//덧셈식 출력하기
rl.on('line', function (line) {  input = line.split(' ');
}).on('close', function () {
  console.log(Number(input[0]) + " + " + Number(input[1]) + " = " + (Number(input[0]) + Number(input[1])));
});
/// 더 깔끔하게도 가능
//rl.on("line", function (line) {  [a, b] = line.split(" ");
//}).on("close", function () {
//  console.log(a, "+", b, "=", Number(a) + Number(b));
//});

//문자열 붙여서 출력하기
rl.on("line", function (line) {  input = line.split(" ");
}).on("close", function () {
  console.log(input[0] + input[1]);
});
/// input.join('')으로 여러개도 처리 가능한것도 가능

//문자열 돌리기
rl.on('line', function (line) {  input = [line];
}).on('close',function(){
  str = input[0].split('');
  for (n of str) { console.log(n); }
});

//홀짝 구분하기
rl.on("line", function (line) {  input = line.split(" ");
}).on("close", function () {
  n = Number(input[0]);
  console.log(n % 2 === 0 ? n + " is even" : n + " is odd");
});

//문자열 겹쳐쓰기
function solution(my_string, overwrite_string, s) {
  //return my_string.replace(my_string.slice(s, s+overwrite_string.length), overwrite_string);
  /// 문자를 리플레이스 하면 될줄 알았는데 같은 언어가 중복일 경우를 생각하지 못했음.
  return my_string.slice(0, s) + overwrite_string + my_string.slice(s+overwrite_string.length);
}
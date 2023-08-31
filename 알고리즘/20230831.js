//내적
function solution(a, b, answer = []) {
  for (let i = 0; i < a.length; i++) {
    answer.push(a[i] * b[i]);
  }
  return answer.reduce((acc, cur) => acc + cur);
}
//  더 간단하게 할 수 있었음.
//return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);

//약수의 개수와 덧셈
function solution(left, right, answer = 0) {
  let total = ((right - left + 1) * (left + right)) / 2;
  for (let i = left; i <= right; i++) {
    let count = [];
    for (let j = 1; j <= Math.floor(i); j++) {
      if (i % j === 0) count.push(j);
    }
    if (count.length % 2 != 0) total -= i * 2;
  }
  return total;
}
//  와.. 제곱근이 정수면, 약수의 갯수가 홀수
//function solution(left, right) {
//  var answer = 0;
//  for (let i = left; i <= right; i++) {
//    if (Number.isInteger(Math.sqrt(i))) {
//      answer -= i;
//    } else {
//      answer += i;
//    }
//  }
//  return answer;
//}

//문자열 내림차순으로 배치하기
const solution = (s) => [...s].sort((a, b) => (a < b ? 1 : -1)).join("");
//  문자열 정렬을 다시한번 복습해보자. 
//  와 쏠트 리버스ㄷㄷㄷ;;;;
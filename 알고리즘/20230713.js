//합성수 찾기
function solution(n) {
  var answer = [];
  for (let i = 4; i <= n; i++) {
    checker(i) >= 3 ? answer.push(checker(i)) : 0;
  }
  return answer.length;
}
function checker(n) {
  var Prime = [];
  for (let i = 1; i <= n; i++) {
    n % i == 0 ? Prime.push(i) : 1;
  }
  return Prime.length;
}
//브레이크 익혀보기. for문 안에 이거 넣었으면됨.
//for (let j = 2; j < i; j++) {
//  if (i % j === 0) {
//    answer += 1;
//    break;
//  }
//}

//팩토리얼
function solution(n) {
  var answer = 1;
  for (let i = 1; i <= n; i++) {
    answer *= i;
    if (answer === n) {
      return i;
    }
    if (answer > n) {
      return i - 1;
    }
  }
}
//// 솔직히 다시하자
//재귀함수로 사용했을때
//function factorial(n) {
//  if (n <= 1) {
//    return 1;
//  } else {
//    return n * factorial(n - 1);
//  }
//}

//function solution(n) {
//  for (let i = 1; i < 12; i++) {
//    if (factorial(i) > n) {
//      return i - 1;
//    }
//  }
//}

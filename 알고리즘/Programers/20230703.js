//분수의 덧셈
//기약분수 : 분모와 분자의 공약수가 1뿐인 분수 => 안나뉘는 분수
//분모와 분자를 그들의 최대공약수로 나누면 됨
function solution(n1, d1, n2, d2) {
  let total = [];
  let totalNumer = n1 * d2 + n2 * d1;
  let totalDenom = d1 * d2;
  let gcd = 1;
  for (let i = 2; i <= Math.min(totalNumer, totalDenom); i++) {
    if (totalNumer % i === 0 && totalDenom % i === 0) {
      gcd = i;
    }
  }
  total[0] = totalNumer / gcd;
  total[1] = totalDenom / gcd;
  return total;
}
//function fnGCD(a, b){
//    return (a%b)? fnGCD(b, a%b) : b;
//}
//function solution(denum1, num1, denum2, num2) {
//    let denum = denum1*num2 + denum2*num1;
//    let num = num1 * num2;
//    let gcd = fnGCD(denum, num); //최대공약수
//    return [denum/gcd, num/gcd];
//}

//짝수는 싫어요
function solution(n) {
  var answer = [1];
  for (let i = 2; i < n + 1; i++) {
    i % 2 != 0 ? answer.push(i) : i;
  }
  // for (let i = 1; i <= n; i += 2) answer.push(i); 대단해;
  return answer;
}

//최빈값 구하기 (가장 많이 나오는 값)
//function solution(array) {
//  let answer = [];
//  for (let i = 0; i < array.length; i++) {
//    answer.push(array.filter((ea) => array[i] == ea).length);
//  }
//  answer.sort((a, b) => b - a);
//  return answer;
//}
//자바스크립트에서 배열의 합계와 평균을 구하는 방법으로 reduce( )를 사용하면 된다
//function solution(array) {
//  let counter = 0;
//  let last = 0;
//  let result = 0;
//  for (let i = 0; i < array.length; i++) {
//    if (array[i] == array[i + 1]) {
//      counter++;
//      if (result == last) result = array[i];
//    } else {
//      last = array[i];
//    }
//    console.log(array[i], counter, result, last);
//  }
//}
//function solution(array) {
//  let Checker = "";
//  let Counters = [];
//  for (let i = 0; i < array.length; i++) {
//    Checker = array.filter((el) => el == array[i]);
//    Counters.push(Checker.length);
//  }
//  const maxCnt = [...Counters].sort()[Counters.length - 1];
//  const maxCntIdx = Counters.findIndex((el) => {
//    return el === maxCnt;
//  });
//  return Checker.length > 1 ? -1 : array[maxCntIdx];
//}
function solution(array) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], (map.get(array[i]) || 0) + 1);
  }
  let max = Math.max(...[...map].map((v) => v[1]));
  let count = [...map].filter((v) => v[1] === max).length;
  return count > 1 ? -1 : [...map].find((v) => v[1] === max)[0];
}
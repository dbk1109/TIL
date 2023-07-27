//유한소수 판별하기
//  기약분수로 나타내었을 때 분모의 소인수가 2와 5만 존재해야함.
function solution(a, b) {
    var answer = [];
    let gcd = 1;
    for(let i=2; i <= Math.min(a, b); i++){
      if(a % i === 0 && b % i === 0) gcd = i;
    }
    let n = b / gcd;
    let checker = 2;
    while (n >= 2) {
      if (n % checker === 0) {
        n = n / checker;
        answer.push(checker);
      } else {
        checker++;
      }
    }
    let test = [...new Set(answer)].filter( el => ![2, 5].includes(el) );
    return test.length > 0 ? 2 : 1;
}
/// 사실 이렇게도됨ㅋㅋㅋ
//function solution(a, b) {
//  return (a / b).toString().length > 15 ? 2 : 1;
//}

//겹치는 선분의 길이
function solution(lines) {
  let answer = [];
  let times = 0;
  let dubble = [];
  for (line of lines) {
    for (let i = line[0]; i < line[1]; i++) {
      answer.includes("" + i + (i + 1))
        ? dubble.includes("" + i + (i + 1))
          ? 0
          : (times++, dubble.push("" + i + (i + 1)))
        : answer.push("" + i + (i + 1));
    }
  }
  return times;
}

//특이한 정렬
function solution(numlist, n) {
    let test = new Object;
    let dif = [];
    [...numlist].forEach(x => test[x] = Math.abs(x - n));
    let sorted = Object.entries(test).sort((a, b) => a[1] == b[1] ? b[0] - a[0] : a[1] - b[1]);
    for (let i = 0; i < numlist.length; i++) {
        dif.push(Number(sorted[i][0]));
    }
    return dif;
}
// 와.... sort에 대한 이해가 절실하게 필요하다. 
//js의 sort함수를 보면 음수를 반환하면 a가 먼저, 양수면 b가 순서가 먼저 되도록 짜여져 있고, b랑 a의 거리가 같은 상황 즉 Math.abs(a - n) - Math.abs(b - n)이게 0이 되는 상황이 되면 ||연산자 뒤가 실행되면서 같은 거리일 경우 큰 수를 먼저 나오도록 하는거죠.
//function solution(numlist, n) {
//  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
//}

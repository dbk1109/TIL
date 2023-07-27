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

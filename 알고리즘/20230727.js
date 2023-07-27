//유한소수 판별하기
function solution(a, b) {
  function checker(n) {
    var answer = [];
    let checker = 2;
    while (n >= 2) {
      if (n % checker === 0) {
        n = n / checker;
        answer.push(checker);
      } else {
        checker++;
      }
    }
    return [...new Set(answer)];
  }
  let gcd = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  if (checker(b / gcd).length > 1) {
    return checker(b / gcd).includes(2) && checker(b / gcd).includes(5) ? 1 : 2;
  } else {
    return checker(b / gcd).includes(2) || checker(b / gcd).includes(5) ? 1 : 2;
  }
}

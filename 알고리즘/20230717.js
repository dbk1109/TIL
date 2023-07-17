//소인수분해
function solution(n) {
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
/// new Set() 은 중복값을 제거하기 때문에 중요!!!

//컨트롤 제트
function solution(s) {
  var answer = 0;
  let arr = s.split(" ");
  while (arr.indexOf("Z") != -1) {
    arr.splice(arr.indexOf("Z") - 1, 2);
  }
  return arr.length != 0
    ? Number(arr.reduce((sum, val) => Number(sum) + Number(val)))
    : 0;
}
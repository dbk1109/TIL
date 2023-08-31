//내적
function solution(a, b, answer = []) {
  for (let i = 0; i < a.length; i++) {
    answer.push(a[i] * b[i]);
  }
  return answer.reduce((acc, cur) => acc + cur);
}
//  더 간단하게 할 수 있었음.
//return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
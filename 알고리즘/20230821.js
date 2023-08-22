//문자열의 앞의 n글자
function solution(my_string, n) {
  return my_string.slice(0, n);
}

//접두사인지 확인하기
function solution(my_string, is_prefix) {
  var answer = [];
  for (let i = 1; i < my_string.length; i++) {
    answer.push(my_string.slice(0, i));
  }
  return answer.includes(is_prefix) ? 1 : 0;
}

//문자열 뒤집기
function solution(my_string, s, e) {
    return my_string.slice(0, s) + my_string.slice(s, e+1).split('').reverse().join('') + my_string.slice(e+1)
}
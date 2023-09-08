//시저 암호
//  "".charCodeAt(index) : 코드 가져오기
//  String.fromCharCode(아스키코드값) : 코드에서 값 가져오기
function solution(s, n) {
  n = n > 25 ? n % 26 : n;
  return [...s]
    .map((el, i) => (el != " " ? s.charCodeAt(i) + n : 32))
    .map((el) => ((90 < el && el - n < 97) || 122 < el ? el - 26 : el))
    .map((T) => (T = String.fromCharCode(T)))
    .join("");
}
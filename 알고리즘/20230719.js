//한 번만 등장한 문자
function solution(s) {
  s = s.split("").sort().join("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s = s.replaceAll(s[i], "");
      i--;
    }
  }
  return s;
}
// 와우 미친 맨 뒤에서부터 앞으로;;;
//function solution(s) {
//  let res = [];
//  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//  return res.sort().join("");
//}
// 이건 또 뭐야
//var solution=s=>[...s].filter(c=>s.match(new RegExp(c,'g')).length==1).sort().join('')

//문자열 계산하기
function solution(my_string) {
  return eval(my_string.replaceAll(" ", ""));
}

//숨어있는 숫자의 덧셈 (2)
function solution(my_string) {
    return my_string.replace(/[^0-9]/g, "*").split("*").reduce((sum, val)=> Number(sum) + Number(val), 0)
}
// 초기값이 0으로 지정되어야만 통과하는 이유를 확인해봐야하는듯?
// 정규식 /\D+/ 을 사용해도됨.

//이진수 더하기

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
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}
//2진수 계산하는 함수를 한번 만들어보는것도 나중에 도움될듯

//7의 개수
function solution(array) {
    return array.join('').split('').filter(x => x == 7).length;
}

//잘라서 배열로 저장하기
function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.substr(i, n));
  }
  return answer;
}
//  갓 정규표현식
//function solution(my_str, n) {
//  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
//}

//삼각형의 완성조건 (2)

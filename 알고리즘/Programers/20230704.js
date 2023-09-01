//피자 나눠 먹기 (2)
function solution(n) {
  let result = 6;
  while (result % n != 0) {
    result = result + 6;
  }
  return result / 6;
}

//자릿수 더하기
//function solution(n) {
//    return n.toString().split('').reduce( (sum, val) => Number(sum) + Number(val) );
//}
function solution(n) {
    return n.toString().split('').reduce( (sum, val) => Number(sum) + Number(val), 0 );
}

//숨어있는 숫자의 덧셈 (1)
function solution(my_string) {
    return my_string.match(/[0-9]/g).reduce( (sum, val) => Number(sum) + Number(val));
}

//문자열안에 문자열
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

//제곱수 판별하기
function solution(n) {
  return Math.sqrt(n) % 1 == 0 ? 1 : 2;
}
//isInteger : 정수인지 판별

//세균 증식
function solution(n, t) {
  for (let i = 1; i <= t; i++) {
    n = n * 2;
  }
  return n;
}
//시프트 연산...? 이게뭐임 ;;;;; 
//function solution(n, t) {
//  return n << t;
//}
//return n*Math.pow(2,t);
//return n * (2**t);

//대문자와 소문자
function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    my_string[i].match(/[a-z]/)
      ? (answer += my_string[i].toUpperCase())
      : (answer += my_string[i].toLowerCase());
  }
  return answer;
}

//암호 해독
function solution(cipher, code) {
  let answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}


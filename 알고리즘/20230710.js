//진료 순서 정하기
function solution(emer) {
  let rank = [...emer].sort((a, b) => b - a);
  let answer = [];
  for (let i = 0; i <= emer.length; i++) {
    let index = [...emer].indexOf(rank[i]);
    answer[index] = i + 1;
  }
  return answer;
}
//return emergency.map((k) => {
//  const queue = rank.findIndex((v) => v === k);
//  return queue + 1;
//});
//얕은복사, 깊은복사?

//모스부호 (1)
function solution(letter) {
  const MORSE = {".-":"a","-...":"b","-.-.":"c","-..":"d",".":"e","..-.":"f","--.":"g","....":"h","..":"i",".---":"j","-.-":"k",".-..":"l","--":"m","-.":"n","---":"o",".--.":"p","--.-":"q",".-.":"r","...":"s","-":"t","..-":"u","...-":"v",".--":"w","-..-":"x","-.--":"y","--..":"z"};
  let KEYS = Object.keys(MORSE);
  let answer = "";
  letter = letter.split(" ");
  for( let i = 0; i <= letter.length - 1; i++) {
      answer += Object.values(MORSE)[KEYS.indexOf(letter[i])];
  }
  return answer;
}
//function solution(letter) {
//  return letter.split(" ").reduce((prev, curr) => prev + morse[curr], "");
//}
//리듀스ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ

//구슬을 나누는 경우의 수
//balls * (balls - 1) * (balls - 2) -> a번 반복 / share * (share - 1) * (share - 2) * 2 * 1
function solution(balls, share) {
  let Nume = 1;
  let Deno = 1;
  for (let i = 0; i < share; i++) {
    Nume = Nume * (balls - i);
    Deno = Deno * (share - i);
  }
  return Nume / Deno;
}
//재귀함수로하면 깔끔함
// const 팩토리얼 = num => num === 0 ? 1 : num * 팩토리얼(num-1);
// Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share) )

//인덱스 바꾸기
// 그새 까먹어버린 splice
function solution(my_string, num1, num2) {
  let strings = my_string.split("");
  let n1 = [...strings][num1];
  strings.splice(num1, 1, strings[num2]);
  strings.splice(num2, 1, n1);
  return strings.join("");
}
//개뿔 구조분해할당으로 해결해버린다!
//function solution(my_string, num1, num2) {
//  my_string = my_string.split("");
//  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//  return my_string.join("");
//}

//369게임
function solution(order) {
    return order.toString().split("").filter( i => ["3", "6", "9"].includes(i) ).length;
}
//matchAll(/[3|6|9]/g), new Set([3,6,9]);

//약수 구하기
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    n % i == 0 ? answer.push(i !== 1 || i !== n ? n / i : 1) : 1;
  }
  return answer.sort((a, b) => a - b);
}
// push에 그냥 i 하면 됨

//숫자 찾기
//function solution(num, k) {
//  let counter = num.toString().indexOf(k);
//  return counter > 0 ? counter + 1 : -1;
//}
function solution(num, k) {
    return num.toString().indexOf(k)+1 || -1;
}

//문자열 정렬하기 (2)
function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}
//    return [...s.toLowerCase()].sort().join('')

//합성수 찾기

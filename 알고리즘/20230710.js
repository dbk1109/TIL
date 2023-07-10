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

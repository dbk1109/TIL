//삼총사
//  재귀 전 함수 만들어보기
function solution(number) {
  let len = number.length;
  let arr = [];
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (number[i] + number[j] + number[k] === 0)
          arr.push([number[i], number[j], number[k]]);
      }
    }
  }
  return arr.length;
}
//  재귀로 다시 만들기로 다시 시도.
//  일반적으로 재귀보다 반복문이 성능이 더 좋다.
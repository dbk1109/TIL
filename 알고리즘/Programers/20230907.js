//삼총사
//  재귀 전 함수 만들어보기
//  일반적으로 재귀보다 반복문이 성능이 더 좋다.
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
//재귀적으로 생각하지 말자
//재귀는 어렵다. 하지만 접근법을 안다면 더 쉽게 풀 수 있다.
//함수 실행순서를 머릿속에 그리려 하지 말자. 재귀를 쉽게 푸는 방법은 최대한 재귀적으로 생각하지 않는 것이다.
//재귀가 풀리는 4단계 법근법
//1. 꼭 재귀가 필요한지 생각해본다.
//재귀적인 자료 구조나 풀이 공식이 있을 때 혹은 변수 선언을 하지 않아야할 때 쓰면 된다.

//2. 베이스 조건
//답을 바로 알 수 있는 가장 간단한 상황을 가정해본다. 0과 1을 사용한 인풋값을 생각해본다.

//3. 분해
//베이스 조건에 가까워지도록 인풋값을 조작한다.

//4. 조합
//부분 답을 가지고 전체 답을 구하는 방법을 생각해본다. 베이스 조건 바로 윗단계, 베이스 조건 3단계 위의 상황을 가정하고 둘의 규칙성을 찾는다.
// base 조건 = 자기 자신을 호출하지 않게 하는 조건. 재귀가 끝나는 조건.
let count = 0;
function maker(start){
  if (start === number.length - 2) return count;
  
}
if(start === number.length-2) return count;
// date type
typeof number
// div
start++;



if (arr.reduce((a, b) => a + b) === 0) count++;

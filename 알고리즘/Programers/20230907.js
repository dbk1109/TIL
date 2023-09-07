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
//  재귀적으로 생각하지 말자
//  함수 실행순서를 머릿속에 그리려 하지 말자. 재귀를 쉽게 푸는 방법은 최대한 재귀적으로 생각하지 않는 것이다.
//  재귀가 풀리는 4단계 접근법
//  1. 꼭 재귀가 필요한지 생각해본다.
//    재귀적인 자료 구조나 풀이 공식이 있을 때 혹은 변수 선언을 하지 않아야할 때 쓰면 된다.
//  2. 베이스 조건
//    답을 바로 알 수 있는 가장 간단한 상황을 가정해본다. 0과 1을 사용한 인풋값을 생각해본다.
//  3. 분해
//    베이스 조건에 가까워지도록 인풋값을 조작한다.
//  4. 조합
//    부분 답을 가지고 전체 답을 구하는 방법을 생각해본다. 베이스 조건 바로 윗단계, 베이스 조건 3단계 위의 상황을 가정하고 둘의 규칙성을 찾는다.
//base 조건 = 자기 자신을 호출하지 않게 하는 조건. 재귀가 끝나는 조건.
function solution(number) {
  let count = 0;
  function findTriplets(start, currentArr) {
    if (currentArr.length === 3) {
      if (currentArr.reduce((a, b) => a + b, 0) === 0) {
        count++; // 현재 조합을 결과에 추가
      }
      return;
    }
    for (let i = start; i < number.length; i++) {
      currentArr.push(number[i]);
      findTriplets(i + 1, currentArr); // 다음 숫자를 선택하기 위해 재귀 호출
      currentArr.pop(); // 재귀에서 돌아오면서 마지막 선택한 숫자 제거
    }
  }
  findTriplets(0, []);
  return count
}

//크기가 작은 부분문자열
//function solution(t, p) {
//  function maker(index, arr) {
//    if (index === t.length - p.length + 1) return arr;
//    arr.push([...t].slice(index, index + p.length).join(""));
//    return maker(index + 1, arr);
//  }
//  return maker(0, []).filter((x) => x <= p).length;
//}
/// 런타임에러가 나서 질문하니 재귀함수는 좋지 않은것 같다고 함.
function solution(t, p, count = 0) {
  for (let i = 0; i < t.length - p.length + 1; i++) {
    if ([...t].slice(i, i + p.length).join("") <= p) count++;
  }
  return count;
}
//순서쌍의 개수
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer++;
    }
  }
  return answer;
}

///점의 위치 구하기
function solution(dot) {
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}

//배열 자르기
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

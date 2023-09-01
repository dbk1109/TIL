//2차원으로 만들기
function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, n + i));
  }
  return answer;
}
//뭐가뭔지 모르것다~

//공 던지기
function solution(numbers, k) {
  var ball = 0;
  for (let counter = 0; counter < k - 1; counter++) {
    ball += 2;
  }
  return numbers[ball % numbers.length];
}
//return numbers[(--k*2)%numbers.length];
//k-1 후 2를 곱한 만큼 움직임, 움직이는 거리가 배열의 길이를 초과한 경우를 위해 배열길이로 모듈러연산


//같은 숫자는 싫어
function solution(arr) {
  return arr.filter((x, i) => x != arr[i + 1]);
}
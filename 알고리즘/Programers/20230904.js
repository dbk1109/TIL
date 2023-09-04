//행렬의 덧셈
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let inner = [];
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i][j] + arr2[i][j]) inner.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(inner);
  }
  return answer;
}
//  map 안에 map 으로 더 짧게
function solution(arr1, arr2) {
  return arr1.map((x, i) => (x = x.map((y, j) => x[j] + arr2[i][j])));
}
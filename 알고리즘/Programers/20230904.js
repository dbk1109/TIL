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

//직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 1; i <= b; i++) {
    console.log("*".repeat(a));
  }
});
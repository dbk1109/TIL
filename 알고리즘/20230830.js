//정수를 나선형으로 배치하기
function solution(n) {
  var answer = Array.from(Array(n), () => Array(n).fill(0));
  let [yT, xPm, yPm] = [true, false, true];
  let [num, x, y, arr, count] = [1, 0, 0, [1], n - 1];
  for (let i = 1; i < n * 2; i++) {
    if (arr.length % 2 === 0 && i > 3) count--;
    arr.push(arr[i - 1] + count);
  }
  while (num <= n * n) {
    answer[x][y] = num;
    if (arr.includes(num) && num != 1) {
      yT = !yT;
      yT ? (yPm = !yPm) : (xPm = !xPm);
    }
    yT ? (yPm ? y++ : y--) : xPm ? x++ : x--;
    num++;
  }
  return answer;
}
//  더 효율적인 알고리즘이라고 한다..
//  1. 방향에 따른 증감을 인덱스에 넣어 각각 dx, dy로 관리해 더 효율적임
//  2. 그 인덱스를 direction으로 컨트롤하면서 나누기를 통해 순회하게함.
//function solution(n) {
//  const answer = Array.from({ length: n }, () => Array(n).fill(0));
//  let [x, y, num] = [0, 0, 1];
//  const dx = [0, 1, 0, -1];
//  const dy = [1, 0, -1, 0];
//  let direction = 0;
//  while (num <= n * n) {
//    answer[x][y] = num;
//    const nx = x + dx[direction];
//    const ny = y + dy[direction];
//    if (nx >= 0 && ny >= 0 && nx < n && ny < n && answer[nx][ny] === 0) {
//      x = nx;
//      y = ny;
//    } else {
//      direction = (direction + 1) % 4;
//      x += dx[direction];
//      y += dy[direction];
//    }
//    num++;
//  }
//  return answer;
//}

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


// ** level 1으로 레벨업! *//

//자릿수 더하기
function solution(n) {
  return n.toString().split('').reduce((s,v) => Number(s)+Number(v), 0);
}
// 초기값을 0으로 지정해야함 (아니면 문자형이므로)

//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
//  실무에선 무조건 퍼포먼스라 for문도 respect 해줍시다 물론 간지는 Array(n).fill(x).map이 더나지만..

//나머지가 1이 되는 수 찾기
function solution(n) {
    let x = 1;
    while( n % x != 1) { x++; }
    return x;
}
//디폴트 값; while문에서 증감 연산자; 가능

//자연수 뒤집어 배열로 만들기
function solution(n) {
    return n.toString().split('').map(x => Number(x)).reverse();
}
//  n.toString => (n+"")으로 가능

//문자열을 정수로 바꾸기
function solution(s) {
  return Number(s);
}
//  str/1 해도됨

//문자열 내 p와 y의 개수
const solution = (s) =>
  [...s].filter((x) => x.toLowerCase() == "p").length ===
  [...s].filter((x) => x.toLowerCase() == "y").length;

//정수 제곱근 판별
const solution = (n) => Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n)+1, 2) : -1;

//정수 내림차순으로 배치하기
function solution(n) {
    return Number((n+'').split('').sort((a,b) => b-a).join(''));
}
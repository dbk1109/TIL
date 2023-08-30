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

//하샤드 수
// 하샤드 수 또는 니번 수는 주어진 진법에서 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어지는 양의 정수를 말한다.
function solution(x) {
    return x % x.toString().split('').reduce((a,v) => Number(a) + Number(v)) === 0 ? true : false;
}

//두 정수 사이의 합
function solution(a, b) {
  let num = 0;
  let [A, B] = [a, b].sort((x, y) => x - y);
  for (let i = A; i <= B; i++) {
    num += i;
  }
  return num;
}
/// 등차수열 미쳤다
//function solution(a, b) {
//  const [A, B] = [a, b].sort((x, y) => x - y);
//  return ((B - A + 1) * (A + B)) / 2;
//}

//콜라츠 추측
function solution(num, count = 0) {
  while (num != 1) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }
  return count > 500 ? -1 : count;
}

//서울에서 김서방 찾기
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let answer = arr.filter((x) => x % divisor === 0).sort((a, b) => a - b);
  return answer.length > 0 ? answer : [-1];
}
// function solution(arr, divisor) {
//    const answer = arr.reduce((result, current) => {
//        if (current % divisor === 0) {
//            result.push(current);
//        }
//        return result;
//    }, []);
//    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
//}
//이 코드는 filter 대신 reduce를 사용하여 원소를 필터링하고 더 효율적인 처리를 하도록 개선한 것입니다. 이렇게 함으로써 배열을 한 번만 순회하면서 처리하게 되므로 효율성이 더 향상됩니다.

//음양 더하기
function solution(absolutes, signs) {
  return absolutes.reduce((s, c, i) => s + (signs[i] ? c : -c), 0);
}


//안전지대
function solution(board) {
  let mine = [];
  let answer = 0;
  let n = board.length - 1;
  for (line in board) {
    for (num in board[line]) {
      if (board[line][num] == 1) {
        mine.push([Number(line), Number(num)]);
      }
    }
  }
  function changer(x, y) {
    if (y - 1 > -1) { board[x][y - 1] = 1; }
    board[x][y] = 1;
    if (y + 1 <= n) { board[x][y + 1] = 1; }
  }
  if (mine[0] != undefined) {
    for (let i = 0; i < mine.length; i++) {
      let [x, y] = [mine[i][0], mine[i][1]];
      if (x - 1 > -1) { changer(x - 1, y); }
      changer(x, y);
      if (x + 1 <= n) { changer(x + 1, y); }
    }
  }
  for (line in board) {
    for (num in board[line]) {
      if (board[line][num] == 0) { answer++; }
    }
  }
  return answer;
}
// 너무 번잡하다.. 이렇게 깔끔하길
//    some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다. 
//    만약 배열에서 주어진 함수가 true을 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다. 이 메서드는 배열을 변경하지 않습니다.
//function solution(board) {
//    let outside = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
//    let safezone = 0;
//    board.forEach((row, y, self) => row.forEach((it, x) => {
//        if (it === 1) return false;
//        return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x]) ? false : safezone++;
//    }));
//    return safezone;
//}

//저주의 숫자 3
function solution(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 || i.toString().split('').includes('3')) {n++;}
    }
    return n;
}

//평행
// 기울기가 같다 = 평행한다는걸 순간적으로 캐치하지 못함
function solution(dots) {
    let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    let y = [y1 - y2, y1 - y3, y1 - y4, y2 - y3, y2 - y4, y3 - y4];
    let x = [x1 - x2, x1 - x3, x1 - x4, x2 - x3, x2 - x4, x3 - x4];
    let lines = [];
    for (let i = 0; i < y.length; i++) {
        lines.push(y[i] / x[i]);
    }
    return lines[0] == lines[5] || lines[1] == lines[4] || lines[2] == lines[3] ? 1 : 0;
}
// 더 이해가 쉬움
//function solution(dots) {
//    if((dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]) === (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0])) return 1
//    if((dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]) === (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0])) return 1
//    if((dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]) === (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0])) return 1
//    return 0
//}

//유한소수 판별하기
function solution(a, b) {
  function checker(n) {
    var answer = [];
    let checker = 2;
    while (n >= 2) {
      if (n % checker === 0) {
        n = n / checker;
        answer.push(checker);
      } else {
        checker++;
      }
    }
    return [...new Set(answer)];
  }
  let gcd = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  if (checker(b / gcd).length > 1) {
    return checker(b / gcd).includes(2) && checker(b / gcd).includes(5) ? 1 : 2;
  } else {
    return checker(b / gcd).includes(2) || checker(b / gcd).includes(5) ? 1 : 2;
  }
}
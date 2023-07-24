//캐릭터의 좌표
function solution(keyinput, board) {
    var [x, y] = [0, 0];
    let [maxX, maxY] = [parseInt(board[0]/2), parseInt(board[1]/2)];
    for (key of keyinput) {
        if (key === "up") { y++; }
        if (key === "down") { y--; }
        if (key === "left") { x--; }
        if (key === "right") { x++; }
        if (maxX <= Math.abs(x)) { x > 0 ? x = maxX : x = maxX * -1 }
        if (maxY <= Math.abs(y)) { y > 0 ? y = maxY : y = maxY * -1 }
    }
    return [x, y];
}
// 스위치 사용법 체크
//function solution(keyinput, board) {
//    let res = [0,0];
//    for (let p of keyinput) {
//        switch(p){
//            case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
//            case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
//            case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
//            case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
//        }
//    }
//    return res;
//}

//다항식 더하기
function solution(polynomial) {
    let poly = polynomial.split(" + ");
    let answerX = 0;
    let answerN = 0;
    for (n of poly) {
        if(n.includes("x")) {
          if ( n.split("")[0] != "x") {
              answerX += Number(n.split("x")[0]);
          } else {
              answerX++;
          }
        } else {
            answerN += Number(n);
        }
    }
    let answer = '';
    if (answerX == 0) {
        answer += answerN.toString();
    } else {
        answer += answerX == 1 ? "x" : answerX + "x";
        if(answerN != 0 ) {answer += " + " + answerN};
    } 
    return answer;
}
// 깔끔한 식
//function solution(polynomial) {
//    const arr = polynomial.split(" + ");
//    const xNum = arr
//                .filter(n => n.includes("x"))
//                .map(n => n.replace('x', '') || '1')
//                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
//    const num = arr
//                .filter(n => !isNaN(n))
//                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
//    let answer = [];
//    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
//    if(num) answer.push(num);
//    return answer.join(" + ");
//}

//안전지대

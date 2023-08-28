//배열의 길이를 2의 거듭제곱으로 만들기
function solution(arr) {
  let nums = arr.length.toString(2);
  let num = 1;
  if (nums.substring(1).includes(1)) {
    for (let i = nums.length; i > 0; i--) {
      num *= 10;
    }
  }
  for (let i = parseInt(num, 2) + 1; arr.length < parseInt(num, 2); i--) {
    arr.push(0);
  }
  return arr;
}
//  이렇게 간단하다니.. 
//return [...arr, ...Array(2 ** Math.ceil(Math.log2(arr.length)) - arr.length).fill(0)];

//문자열 묶기
function solution(strArr) {
  let answer = {};
  strArr.forEach(x => answer[x.length] == null ? answer[x.length] = 1 : answer[x.length] += 1)
  return Object.values(answer).sort((a,b) => b-a)[0];
}
//  이렇게 쓰는거 배워두면 좋을듯
//strArr.forEach(x => answer[x.length] = (answer[x.length] || 0) + 1);

//이차원 배열 대각선 순회하기
function solution(board, k) {
  var answer = 0;
  for (i in board) {
    for (j in board[i]) {
      if (Number(i) + Number(j) <= k) answer += board[i][j];
    }
  }
  return answer;
}

//날짜 비교하기
//function solution(date1, date2) {
//  return date1.join("") < date2.join("") ? 1 : 0;
//}  --> 나름 좋은 생각이었는데 아쉬움
function solution(date1, date2) {
  return new Date(date1) < new Date(date2) ? 1 : 0;
}
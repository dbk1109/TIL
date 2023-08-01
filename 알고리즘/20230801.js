//문자열 밀기
function solution(A, B) {
  A = A.split("");
  let counter = 0;
  for (let i = 0; i < A.length; i++) {
    if (A.join("") != B) {
      A.unshift(A.pop());
      counter++;
    } else {
      return counter;
    }
  }
  return -1;
}
// 미쳤다 이게 뭐냐; 어떻게 이런생각을 하냐..
//let solution=(a,b)=>(b+b).indexOf(a)

//종이 자르기
function solution(M, N) {
  return M * N - 1;
}

//연속된 수의 합
function solution(num, total) {
    var answer = [];
    for (let i = total % num != 0? -parseInt(num/2)+1 : -parseInt(num/2); i <= (num/2); i++){
        answer.push(parseInt(total/num)+i);
    }
    return answer;
}
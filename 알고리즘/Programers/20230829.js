//두 수의 합
const solution = (a, b) => (BigInt(a) + BigInt(b)).toString();
//  긴 숫자 노출방법 BigInt()
//  String(BigInt(a) + BigInt(b)) 이렇게도 됨.

//정사각형으로 만들기
function solution(arr) {
  let row    = arr.length;
  let column = arr[0].length;
  if (row > column) {
      arr.forEach( function(a) { while(a.length < row) {a.push(0)} }) 
  } else {
      while(row < column-1) {
          row = arr.length;
          arr.push(new Array(column).fill(0))
      }
  }
  return arr;
}

//그림 확대
function solution(picture, k) {
    let answer = [];
    picture.map(x => {
        let counter = 0;
        while(counter < k) {
            answer.push(x.split('').map(y => y.repeat(k)).join(''));
            counter++;
        }
    })
    return answer;
}

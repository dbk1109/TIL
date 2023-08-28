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
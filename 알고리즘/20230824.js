//x 사이의 개수
function solution(myString) {
  return myString.split("x").map((x) => x.length);
}

//문자열 잘라서 정렬하기
function solution(myString) {
    return myString.split('x').filter(x => x != "").sort();
}
//  정규식 매치를 잘 쓰는것도 중요하다
//  const solution = (s) => s.match(/[^x]+/g).sort();

//간단한 식 계산하기
function solution(binomial) {
  let [a, op, b] = binomial.split(" ").map((x, i) => i != 1 ? Number(x) : x);
  switch(op) {
      case "+" : return a + b;
      case "-" : return a - b;
      case "*" : return a * b;
  }
}
//  아니이게뭐야
//function solution(binomial) {
//    return Function(`return ${binomial}`)()
//}

//문자열 바꿔서 찾기
function solution(myString, pat) {
  myString = myString.split("");
  for (let i = 0; i < myString.length; i++) {
    myString[i] === "A" ? (myString[i] = "B") : (myString[i] = "A");
  }
  return myString.join("").includes(pat) ? 1 : 0;
}
//  아 맵
//[...myString].map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0

//rny_string
function solution(rny_string) {
  return rny_string.replaceAll("m", "rn");
}

//세 개의 구분자
function solution(myStr) {
  ['a', 'b', 'c'].forEach( el => myStr = myStr.replaceAll(el, '_') )
  let answer = myStr.split("_").filter(x => x != '')
  return answer.length > 0 ? myStr.split("_").filter(x => x != '') : ["EMPTY"];
}
//  하 이렇게 짧다고?
//return myStr.match(정규식) || ["EMPTY"];
//정규식 가능 목록 : /[^a-c]+/g, /[a|b|c]/, /a|b|c/g, /[abc]/g;

//배열의 원소만큼 추가하기
function solution(arr) {
  var x = [];
  for (i in arr) {
    let counter = 0;
    while (counter < arr[i]) {
      x.push(arr[i]);
      counter++;
    }
  }
  return x;
}
//  와 미친 리듀스
//  return arr.reduce((a, c) => a.concat(Array(c).fill(c)), [])

//빈 배열에 추가, 삭제하기
function solution(arr, flag) {
    var X = [];
    for(let i = 0; i < arr.length; i++) {
        flag[i] ? X.push(...new Array(arr[i]*2).fill(arr[i])) : X.splice(X.length-arr[i], arr[i])
    }
    return X;
}
//  또 리듀스야....
//return arr.reduce(((e,l,a)=>flag[a]?[...e,...new Array(2*l).fill(l)]:e.slice(0,-l)),[]);

//배열 만들기 6
function solution(arr) {
    var stk = [];
    for(let i = 0; i< arr.length; i++) {
        stk.length === 0 ? stk.push(arr[i]) : (
            stk[stk.length-1] === arr[i] ? stk.pop() : stk.push(arr[i])
        )
    }
    return stk.length != 0 ? stk : [-1];
}

//무작위로 K개의 수 뽑기
function solution(arr, k) {
  let answer = arr.filter((x, i) => arr.indexOf(x) === i).slice(0, k);
  while( answer.length < k) {answer.push(-1)}
  return answer;
}
//  그래 Set 쓰면되잖아 이미 해보고 안되서 포기하냐
//function solution(arr, k) {
//  const set = new Set(arr);
//  return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
//}

//부분 문자열
function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}
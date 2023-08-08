//코드 처리하기
function solution(code) {
    let ret = '';
    let mode = 0;
    code.split('').map((x, idx) => {
        mode ? (
            x === "1" ? mode = 0 : (idx%2!=0 ? ret += x : ret)
        ) : (
            x === "1" ? mode = 1 : (idx%2===0 ? ret += x : ret) 
        )
    })
    return ret.length > 0 ? ret : "EMPTY";
 }

 //등차수열의 특정한 항만 더하기
function solution(a, d, included) {
    return included.map( (x, idx) => x ? a + (d * idx) : 0 ).reduce((sum, val) => sum + val)
}
//  reduce만 쓰는 방법
//    return included.reduce((acc, flag, i) => {
//      return flag ? acc + a + d * i : acc;
//    }, 0);

//주사위 게임 2
function solution(a, b, c) {
  let answer = 0;
  a == b && b == c ? answer = 27 * Math.pow(a, 6)
    : a == b || a == c || b == c
    ? (answer = (a + b + c) * (a * a + b * b + c * c))
    : (answer = a + b + c);
  return answer;
}
//  재사용에 대한 가능성을 열어두려면 switch로 case 나눠보는것도 도움될듯

//원소들의 곱과 합
function solution(nl) {
    return nl.reduce((a, c) => a * c) < Math.pow(nl.reduce((a, c) => a + c), 2) ? 1 : 0;
}

//수 조작하기 1
function solution(n, control) {
  control.split("").map((x) => {
    if (x === "w") n++;
    if (x === "s") n--;
    if (x === "d") n += 10;
    if (x === "a") n -= 10;
  });
  return n;
}

//수 조작하기 2
function solution(numLog) {
  let answer = [];
  for(let i = 0; i < numLog.length -1; i++) {
    switch(numLog[i+1] - numLog[i]) {
      case 1 : answer += "w"; break;
      case -1 : answer += "s"; break;
      case 10 : answer += "d"; break;
      case -10 : answer += "a"; break;
    }
  }
  return answer;
}
//  object로 간단한건 해도 괜찮을듯.
//function solution(numLog) {
//    const convert = {
//        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
//    };
//    return numLog.slice(1).map((v, i) => {
//        return convert[v - numLog[i]]
//    }).join('')
//}

//
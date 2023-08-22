//문자열 뒤집기
function solution(my_string, s, e) {
  return my_string.slice(0, s) + my_string.slice(s, e+1).split('').reverse().join('') + my_string.slice(e+1)
}

//세로 읽기
function solution(my_string, m, c) {
  var answer = [];
  for (let i = 0; i < my_string.length / m; i++) {
    answer.push(my_string.slice(m * i, m * (i + 1))[c - 1]);
  }
  return answer.join("");
}
//  reduce 나 filter , map 으로도 충분히 할 수 있었다.
//  return Array.from(my_string).reduce((word, v, i) => {
//     return i % m + 1 === c ? word + v : word
//  }, '')
//  [...my_string].filter((_, i) => i % m === c - 1).join("");
//  const solution=(s,m,c)=>s.match(new RegExp(`.{${m}}`,'g')).map(v=>v[c-1]).join('')

//qr code
function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join("");
}

//문자 개수 세기
function solution(my_string) {
    let answer = Array(52).fill(0);
    const alpA = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    alpA.push(...Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97)));
    let str = [...my_string];
    for(let i = 0; i < str.length; i++) {
        alpA.includes(str[i]) ? (answer[alpA.indexOf(str[i])] += 1) : answer;
    }
    return answer;
}
//  안쓰겠다는 욕심을 버리면 쉬워진다
//function solution(my_string) {
//  let answer = Array(52).fill(0);
//  const alpA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//  for (let i = 0; i < my_string.length; i++) {
//    if (alpA.includes(my_string[i])) answer[alpA.indexOf(my_string[i])] += 1;
//  }
//  return answer;
//}


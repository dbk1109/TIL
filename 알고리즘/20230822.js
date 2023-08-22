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

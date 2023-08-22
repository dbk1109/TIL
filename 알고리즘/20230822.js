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
//  손으로 안쓰겠다는 욕심을 버리면 쉬워진다
//function solution(my_string) {
//  let answer = Array(52).fill(0);
//  const alpA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//  for (let i = 0; i < my_string.length; i++) {
//    if (alpA.includes(my_string[i])) answer[alpA.indexOf(my_string[i])] += 1;
//  }
//  return answer;
//}

//배열 만들기 1
function solution(n, k) {
    var answer = [];
    let x = 1;
    while(x <= n) {
        if(x % k === 0) answer.push(x); x++;
    }
    return answer;
}

//글자 지우기
function solution(my_string, indices) {
  let str = [...my_string];
  for (i of indices) {
    str.splice(i, 1, "");
  }
  return str.join("");
}

//가까운 1 찾기
function solution(arr, idx) {
  return arr.slice(idx).indexOf(1) != -1 ? arr.slice(idx).indexOf(1) + idx : -1;
}
//  와 세상에 findIndex 생각도 못했다
//  return arr.findIndex((v, i) => idx <= i && v === 1);

//리스트 자르기
function solution(n, slicer, num_list) {
    let [a,b,c] = slicer;
    switch(n) {
        case 1 : return num_list.slice(0, b+1);
        case 2 : return num_list.slice(a);
        case 3 : return num_list.slice(a, b+1);
        case 4 : return num_list.slice(a, b+1).filter((_, i) => !(i % c));
    }
}

//배열 만들기 3
function solution(arr, intervals) {
    let [f, s] = intervals;
    return arr.slice(f[0], f[1]+1).concat(arr.slice(s[0], s[1]+1));
}
//  [...arr.slice(a, b+1), ...arr.slice(c, d+1)]; 이렇게 합쳐도된다!
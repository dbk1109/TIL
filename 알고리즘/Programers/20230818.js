//주사위 게임 3
function solution(a, b, c, d) {
    let obj = {};
    for (dice of [a, b, c, d]) {
        obj[dice] ? obj[dice]++ : obj[dice] = 1
    }
    let [p, q, r] = Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]}).map(x => Number(x));
    switch(Object.values(obj).length) {
        case 1 : return 1111 * a; break;
        case 2 : return Object.values(obj).sort((a,b) => b-a)[0] === 3 ? 
            (Math.pow(10 * p + q, 2)) : (p + q) * Math.abs(p - q); break;
        case 3 : return q * r; break;
        default : return Math.min(a, b, c, d);
    }
}

//접미사 배열
function solution(my_string) {
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.slice(i, my_string.length));
  }
  return answer.sort();
}

//문자열의 뒤의 n글자
function solution(my_string, n) {
  return my_string.slice(-n);
}

//부분 문자열 이어 붙여 문자열 만들기
function solution(my_strings, parts) {
  var answer = "";
  for (let i = 0; i < my_strings.length; i++) {
    answer += my_strings[i].slice(parts[i][0], parts[i][1] + 1);
  }
  return answer;
}

//배열 만들기 5
function solution(intStrs, k, s, l) {
  return intStrs.map((el) => Number(el.slice(s, s + l))).filter((x) => x > k);
}

//특정한 문자를 대문자로 바꾸기
function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

//첫 번째로 나오는 음수
function solution(num_list) {
  return num_list.indexOf(num_list.filter((x, idx) => x < 0)[0]);
}

//n개 간격의 원소들
function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }
  return answer;
}
//num_list.filter((_, i) => !(i % n))
//filter 안의 인자 중 _ 는 사용하지 않는 변수라는 의미를 표현합니다.
// 나누기로는 접근해보지 않았는데 신박했다.
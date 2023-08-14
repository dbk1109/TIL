//간단한 논리 연산
function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}
//  첨에 뭔말인지 이해못했잖어; 논리합 OR ∨ , 논리곱 AND ∧

//문자열 여러 번 뒤집기
function solution(my_string, queries) {
  for ([s, e] of queries) {
      my_string = [...my_string].slice(0,s).join('') + [...my_string].slice(s,e+1).reverse().join('') +  [...my_string].slice(e+1).join('')
  }
  return my_string;
}
//  깔끔해...
//function solution(my_string, queries) {
//  let str = my_string.split("");
//  queries.forEach(([start, end]) => {
//    const changeStr = str.slice(start, end + 1);
//    str.splice(start, changeStr.length, ...changeStr.reverse());
//  });
//  return str.join("");
//}

//9로 나눈 나머지
function solution(number) {
  return number.split("").reduce((acc, cur) => Number(acc) + Number(cur)) % 9;
}
//BigInt 는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.
//1const solution=n=>BigInt(n)%9n

//글자 이어 붙여 문자열 만들기
function solution(my_string, index_list) {
  var answer = [];
  for (i of index_list) {
    answer.push(my_string[i]);
  }
  return answer.join("");
}
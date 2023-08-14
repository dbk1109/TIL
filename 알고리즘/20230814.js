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

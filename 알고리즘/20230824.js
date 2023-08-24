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
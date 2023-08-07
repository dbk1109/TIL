//문자열 섞기
function solution(str1, str2) {
  let answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i];
    answer += str2[i];
  }
  return answer;
}
//  return [...str1].reduce((prev, char, i) => prev + char + str2[i], '');
//  return [...str1].map((x, idx)=> x+str2[idx]).join("");
//  객체지향 예제도 있으나 너무 길어서 생략함. class와 constructor를 이용해 구현함

//문자 리스트를 문자열로 변환하기
function solution(arr) {
  return arr.join("");
}

//문자열 곱하기
function solution(my_string, k) {
  return my_string.repeat(k);
}

//더 크게 합치기
function solution(a, b) {
  let A = a + b.toString();
  let B = b + a.toString();
  return A >= B ? Number(A) : Number(B);
}
//  쉬울수록 더 간단한 방법이 많으니까 생각해보기
//  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`)) 

//두 수의 연산값 비교하기
function solution(a, b) {
  return Math.max(`${a}${b}`, 2 * a * b);
}

//홀짝에 따라 다른 값 반환하기
function solution(n) {
    let odd = 0;
    let even = 0;
    for (let i = n; i > 0; i--) {        
        if (i%2 != 0) { odd += i;} 
        else {even += i * i;}
    }
    return n % 2 != 0 ? odd : even;
}
//  n이 짝수일 때는 등차수열의 합 공식을 적용하였고, n이 홀수일 때는 자연수 거듭 제곱의 합을 구하는 공식을 적용
//function solution(n) {
//    if(n%2===1)
//      return  (n+1)/2*((n + 1)/2) ;
//    else
//      return   n*(n+1)*(n+2)/6;
//}

//조건 문자열
function solution(ineq, eq, n, m) {
  eq === "!" ? (eq = "") : eq;
  return eval(`${n}${ineq}${eq}${m}`) ? 1 : 0;
}

//flag에 따라 다른 값 반환하기
function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

//정수 부분
function solution(flo) {
  return parseInt(flo);
}
//  const solution = flo => Math.floor(flo) 이런것도 있다

//n 번째 원소까지
function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(num_list[i]);
  }
  return answer;
}
//  더 대단하다는건 아니지만 간단한걸로 구현이 가능하다면 그쪽으로 해보는게 더 좋다.
//  return num_list.slice(0, n);


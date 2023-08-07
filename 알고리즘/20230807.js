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
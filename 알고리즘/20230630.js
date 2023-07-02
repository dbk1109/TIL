//문자 반복 출력하기
function solution(my_string, n) {
  let answer = "";
  for (s of my_string.split("")) {
    answer += s.repeat(n);
  }
  return answer;
}
//맵으로 하는거
//function solution(my_string, n) {
//    var answer = [...my_string].map(v => v.repeat(n)).join("");
//    console.log(answer);
//    return answer;
//}

//최댓값 만들기 (1)
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

//분수의 덧셈
//기약분수 : 분모와 분자의 공약수가 1뿐인 분수 => 안나뉘는 분수

//배열 두배 만들기
function solution(numbers) {
  let answer = [];
  for (num of numbers) {
    answer.push(num * 2);
  }
  return answer;
}
//reduce.......
//function solution(numbers) {
//  return numbers.reduce((a, b) => [...a, b * 2], []);
//}

//최빈값 구하기 (가장 많이 나오는 값)
//function solution(array) {
//  let answer = [];
//  for (let i = 0; i < array.length; i++) {
//    answer.push(array.filter((ea) => array[i] == ea).length);
//  }
//  answer.sort((a, b) => b - a);
//  return answer;
//}
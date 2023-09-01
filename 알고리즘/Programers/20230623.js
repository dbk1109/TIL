// 나머지 구하기
function solution(num1, num2) {
  var answer = num1 % num2;
  return answer;
}

//두 수의 차
function solution(num1, num2) {
  var answer = num1 - num2;
  return answer;
}

//몫 구하기
function solution(num1, num2) {
  var answer = parseInt(num1 / num2);
  return answer;
}

//숫자 비교하기
function solution(num1, num2) {
  let answer = num1 == num2 ? 1 : -1;
  return answer;
}

//나이 출력
function solution(age) {
  var answer = 2023 - age;
  return answer;
}

//두 수의 합
function solution(num1, num2) {
  var answer = num1 + num2;
  return answer;
}

//두 수의 나눗셈
function solution(num1, num2) {
  var answer = parseInt((num1 / num2) * 1000);
  return answer;
}

//각도기
function solution(angle) {
    if ( 0 < angle && angle < 90) {return 1}
    else if (angle == 90) {return 2}
    else if (90 < angle && angle < 180) {return 3}
    else {return 4}
}

//짝수의 합
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      answer += i;
    }
  }
  return answer;
}

//배열의 평균값
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer / numbers.length;
}

//양꼬치
function solution(n, k) {
  var answer = 0;
  let freeDrink = 0;
  if (n / 10 >= 0) {
    freeDrink = freeDrink + parseInt(n / 10);
    k = k - freeDrink;
  }
  answer += n * 12000 + k * 2000;
  return answer;
}

//편지
function solution(message) {
  return [...message].length * 2;
}
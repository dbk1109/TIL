//중복된 숫자 개수
//filter 함수는,
//배열에서 특정 조건에 부합하는 값들만을 모아서 새로운 배열로 리턴하는 함수입니다.
//filter 함수는 callback 함수에서 true를 리턴하는 element들을 모아서 새로운 배열을 만들어서 리턴합니다.
function solution(array, n) {
  return array.filter((word) => word == n).length;
}

//카운트 다운
function solution(start, end) {
  var answer = [];
  while (start >= end) {
    answer.push(start);
    start--;
  }
  return answer;
}

//피자 나눠 먹기 (1)
//Math.round 반올림 ceil 올림 floor 내림
function solution(n) {
  return Math.ceil(n / 7);
}

//피자 나눠 먹기 (3)
function solution(slice, n) {
  return Math.ceil(n / slice);
}

//머쓱이보다 키 큰 사람
function solution(array, height) {
  return array.filter((ppl) => ppl > height).length;
}

//문자열 뒤집기
function solution(my_string) {
  let answer = [];
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
}

//짝수 홀수 개수
function solution(num_list) {
  var answer = [];
  let EVEN = num_list.filter((num) => num % 2 == 0).length;
  let ODD = num_list.length - EVEN;
  answer.push(EVEN, ODD);
  return answer;
}
//쩐다..!
//function solution(num_list) {
//  var answer = [0, 0];
//  for (let a of num_list) {
//    answer[a % 2] += 1;
//  }
//  return answer;
//}

//길이에 따른 연산
//자바스크립트에서 배열의 합계와 평균을 구하는 방법으로 reduce( )를 사용하면 된다
//function solution(num_list) {
//  return num_list.length >= 11
//    ? num_list.reduce((sum, val) => sum + val)
//    : num_list.reduce((times, val) => times * val, 1);
//} --> 이렇게했는데 아래같은걸 발견함
// num_list.reduce((sum,val)=>num_list.length>10?sum+val:sum*val)
function solution(num_list) {
  return num_list.reduce((sum, multi) =>
    num_list.length >= 11 ? sum + multi : sum * multi
  );
}

//삼각형의 완성조건 (1)
function solution(sides) {
  sides = sides.sort((a, b) => b - a);
  return sides[0] < sides[1] + sides[2] ? 1 : 2;
}

//배열의 유사도
//function solution(s1, s2) {
//  let counter = 0;
//  let set = s1.filter((a, b) => a == b ? counter++ : 0)
//  return set;
//}
function solution(s1, s2) {
  return s1.filter((x) => s2.includes(x)).length;
}

//특정 문자 제거하기
//function solution(my_string, letter) {
//  while (my_string.includes(letter)) {
//    my_string = my_string.replace(letter, "");
//  }
//  return my_string;
//}
//이야똑똑해
//function solution(my_string, letter) {
//  return my_string.split(letter).join("");
//}
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

//공배수
function solution(number, n, m) {
  return number % n == 0 && number % m == 0 ? 1 : 0;
}

//n보다 커질 때까지 더하기
function solution(numbers, n) {
  var answer = 0;
  for (let i = 0; answer <= n; i++) {
    answer += numbers[i];
  }
  return answer;
}
//쩌렁
//function solution(numbers, n) {
//  return numbers.reduce((a, c, i, t) => (a <= n ? a + c : a));
//}

//n의 배수
function solution(num, n) {
  return num % n == 0 ? 1 : 0;
}

//아이스 아메리카노
function solution(money) {
  return [parseInt(money / 5500), money % 5500];
}

//배열 뒤집기
function solution(num_list) {
  return num_list.reverse();
}

//이어 붙인 수
function solution(num_list) {
  let answer = 0;
  let EVEN = "";
  let ODD = "";
  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 == 0 ? (EVEN += num_list[i]) : (ODD += num_list[i]);
  }
  answer = Number(EVEN) + Number(ODD);
  return answer;
}

//공백으로 구분하기 1
function solution(my_string) {
  var answer = my_string.split(" ");
  return answer;
}

//배열 원소의 길이
//function solution(strlist) {
//  var answer = [];
//  for (let i = 0; i < strlist.length; i++) {
//    answer.push(strlist[i].length);
//  }
//  return answer;
//}
function solution(strlist) {
  return strlist.map((e) => e.length);
}

//대문자로 바꾸기
function solution(myString) {
  return myString.toUpperCase();
}

//문자열로 변환
function solution(n) {
  return n.toString();
}

//중앙값 구하기
//function solution(array) {
//  return array[parseInt(array.sort().length / 2)];
//}
function solution(array) {
  return array[parseInt(array.sort((a, b) => a - b).length / 2)];
}
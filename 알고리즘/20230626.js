function solution(num_list) {
  return num_list.reverse();
}

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

function solution(my_string) {
  var answer = my_string.split(" ");
  return answer;
}

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

function solution(myString) {
  return myString.toUpperCase();
}

function solution(n) {
  return n.toString();
}

function solution(array) {
  return array[parseInt(array.sort().length / 2)];
}

function solution(array) {
  return array[parseInt(array.sort((a, b) => a - b).length / 2)];
}

//filter 함수는,
//배열에서 특정 조건에 부합하는 값들만을 모아서 새로운 배열로 리턴하는 함수입니다.
//filter 함수는 callback 함수에서 true를 리턴하는 element들을 모아서 새로운 배열을 만들어서 리턴합니다.


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
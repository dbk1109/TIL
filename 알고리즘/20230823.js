//왼쪽 오른쪽
function solution(str_list) {
  for (l of str_list) {
    if (l == "l") return str_list.slice(0, str_list.indexOf("l"));
    if (l == "r") return str_list.slice(str_list.indexOf("r") + 1);
  }
  return [];
}
//  너무 복잡하게 생각하지 않아도 된다!

//홀수 vs 짝수
function solution(num_list) {
    let CHECKER = [[],[]];
    num_list.map((x, i) => i%2 === 0 ? CHECKER[1].push(x) : CHECKER[0].push(x))
    let ODD = CHECKER[0].reduce((sum, val) => sum + val)
    let EVEN = CHECKER[1].reduce((sum, val) => sum + val)
    return ODD >= EVEN ? ODD : EVEN;
}
//  훨씬 간단한걸..?
//function solution(num_list) {
//  let [even, odd] = [0, 0];
//  num_list.map((v, idx) => {
//    !(idx % 2) ? (even += v) : (odd += v);
//  });
//  return odd > even ? odd : even;
//}

//5명씩
function solution(names) {
  return names.filter((_, i) => i % 5 === 0);
}
//const solution = (names) => names.filter((_, i) => !(i % 5)); 이렇게도 됨

//할 일 목록
const solution = (todo_list, finished) => todo_list.filter((_, i) => !finished[i]);

//조건에 맞게 수열 변환하기 1
function solution(arr) {
    return arr.map(x => x % 2 === 0 ? (x >= 50 ? x / 2 : x) : (x < 50 ? x * 2 : x));
}

//조건에 맞게 수열 변환하기 2
function solution(arr) {
    var newArr = [];
    let counter = 0;
    while ( !arr.every((value, idx) => value === newArr[idx])) {
        newArr = [...arr];
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] >= 50) {
                if (arr[i] % 2 === 0) arr[i] = arr[i] / 2
            } else {
                if (arr[i] % 2 != 0) arr[i] = (arr[i] * 2) + 1
            }
        }
        counter++;
    }
    return counter-1;
}
//  every()의 사용법을 익혀두면 좋을것같다.

//조건에 맞게 수열 변환하기 3
const solution = (arr, k) => arr.map((x) => (k % 2 === 0 ? x + k : x * k));

//원하는 문자열 찾기
const solution = (myString, pat) => myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;

//1로 만들기
function solution(num_list) {
    let counter = 0;
    for(let i = 0; i < num_list.length; i++) {
        while(num_list[i] != 1) {
            num_list[i] = num_list[i] % 2 === 0 ? num_list[i] / 2 : (num_list[i]-1) / 2;
            counter++;
        }
    }
    return counter;
}
//  return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
//  2진수로 넣으면 자리수 = 내려가는수인것을 바로 알아차리는게 엄청 신박했다.세상에.

//소문자로 바꾸기
const solution = (myString) => myString.toLowerCase();

//배열에서 문자열 대소문자 변환하기
const solution = (strArr) => strArr.map((x, i) => i % 2 === 0 ? x.toLowerCase() : x.toUpperCase());

//A 강조하기
const solution = (myString) => myString.split('').map(x => x === "a" || x === "A" ? x.toUpperCase() : x.toLowerCase()).join('');
//  와우 const solution = (s) => s.toLowerCase().replaceAll("a", "A");

//ad 제거하기
function solution(strArr) {
  let answer = [];
  strArr.map((x) => (!x.includes("ad") ? answer.push(x) : x));
  return answer;
}
//  !!! 아 filter 함수;;;

//공백으로 구분하기 2
const solution = (my_string) => my_string.split(" ").filter((x) => x != "");

//특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
const solution = (myString, pat) => myString.slice(0, myString.lastIndexOf(pat))+pat;
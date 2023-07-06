//직각삼각형 출력하기
//readline 모듈이 백준처럼 있어야한다는거에서 처음 좀 헤메게 되었다.
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
let input = [];
rl.on('line', function (line) { input = line.split(' '); }).on('close', function () {
    const n = Number(input[0]);
    for(let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
});

//가위 바위 보
// 가위 2 바위 0 보 5
//function solution(rsp) {
//    function checker(el) {
//        if(el == "0") { return "5" } else if(el == "2") { return "0" } else { return "2"};
//    }
//    let answer = rsp.split("").map(el => el.replace(el, checker(el) ) ).join("");
//    return answer;
//}
//review : replace는 불필요했을지도 모른다.
//객체로 사용하는법으로 다시해보기
function solution(rsp) {
    const checker = {
        0 : 5,
        2 : 0,
        5 : 2
    }
    let answer = rsp.split("").map(el => checker[el] ).join("");
    return answer;
}

//개미 군단
//장군 5 병정 3 일 1
function solution(hp) {
  var answer = 0;
  while (hp > 0) {
    if (hp >= 1 && hp < 3) {
      hp = hp - 1;
    } else if (hp >= 2 && hp < 5) {
      hp = hp - 3;
    } else {
      hp = hp - 5;
    }
    answer++;
  }
  return answer;
}
//function solution(hp) {
//    return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
//}
//나머지를 활용해도 됨.

//n의 배수 고르기
function solution(n, numlist) {
  return numlist.filter((el) => el % n == 0);
}

//주사위의 개수
function solution(box, n) {
  return box.map((line) => parseInt(line / n)).reduce((sum, val) => sum * val);
}
//구조분해할당으로 풀면 깔끔함
//let [width, length, height] = box;
//return (
//  Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
//);

//최댓값 만들기 (2)
function solution(numbers) {
    let reorder = numbers.sort((a,b) => b - a);
    if (reorder[0] * reorder[1] > reorder[reorder.length -2] * reorder[reorder.length -1]) {
        return reorder[0] * reorder[1];
    } else { 
        return reorder[reorder.length -2] * reorder[reorder.length -1];
    }
}
//깔끔하진 않아도 최선의 값이었음.

//문자열 정렬하기 (1)
function solution(my_string) {
    return my_string.match(/[0-9]/g).map(Number).sort((a,b) => a - b);
}

//가장 큰 수 찾기
function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}

//외계행성의 나이
function solution(age) {
    const transform = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ];
    return age.toString().split("").map(el => transform[el]).join("");
}
//문자열 자체도 인덱스[] 접근가능
//return age.toString().split("").map(v => "abcdefghij"[v]).join("");

//배열 회전시키기
function solution(numbers, direction) {
    if (direction == "right") {
        let LAST = numbers.splice(numbers.length-1, numbers.length-1);
        numbers.splice(0, 0, LAST[0]);
    } else {
        let FIRST = numbers.splice(0, 1);
        numbers.splice(numbers.length, numbers.length-1, FIRST[0]);
    }
    return numbers;
}
//와...
//function solution(numbers, direction) {
//    var answer = [];

//    if ("right" == direction) {
//        numbers.unshift(numbers.pop());
//    } else {
//        numbers.push(numbers.shift());
//    }

//    answer = numbers;

//    return answer;
//}
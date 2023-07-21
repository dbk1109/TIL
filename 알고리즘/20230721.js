//OX퀴즈
function solution(quiz) {
  var answer = [];
  for (n of quiz) {
    answer.push(eval(n.split("=")[0]) == n.split("=")[1] ? "O" : "X");
  }
  return answer;
}

//삼각형의 완성조건 (2)
function solution(sides) {
  var answer = [];
  sides.sort((a, b) => a - b);
  let InArr = sides[1] - sides[0] + 1;
  let OutArr = sides[0] + sides[1] - 1;
  if (InArr != OutArr) {
    while (OutArr > sides[1]) {
      answer.push(OutArr);
      OutArr--;
    }
    while (InArr <= sides[1]) {
      answer.push(InArr);
      InArr++;
    }
  } else {
    answer.push(InArr);
  }
  return answer.length;
}
// 미친;
//  return Math.min(...sides)*2-1
//sides = [a,b] 이고 새로 주어지는 변의 길이를 c라고 했을 때 a가 가장 긴변인 경우 (즉 a > c인 경우)
//b + c > a > c 이므로 a > c > a-b 이기 때문에 c의 정수 갯수는 b-1개입니다. 
// c가 가장 긴변인 경우도 이런식으로 하면 되고 a=c 인경우 한가지 이므로 2b-1이 나옵니다.
//max-min < x < max+min

//외계어 사전
function solution(spell, dic) {
  let answer = [];
  spell = spell.sort().join("");
  for (n of dic) {
    n = n.split("").sort().join("");
    spell === n ? answer.push(1) : answer.push(2);
  }
  return answer.includes(1) ? 1 : 2;
}
//    return dic.some(s => spell.sort().toString() == [...s].sort().toString()) ? 1 : 2;
//some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다. 

//캐릭터의 좌표

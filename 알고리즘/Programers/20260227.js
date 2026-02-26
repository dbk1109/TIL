//푸트 파이트 대회
function solution(food) {
  var answer = "";

  for (let i = 1; i < food.length; i++) {
    const isEven = food[i] % 2 === 0;
    let times = 0;
    isEven ? (times = food[i]) : (times = food[i] - 1);
    for (let f = 0; f < times / 2; f++) {
      answer = answer + i;
    }
  }

  answer = answer + 0 + answer.split("").reverse().join("");
  return answer;
}

//콜라 문제
function solution(bottle, setCount, iHave) {
  var answer = 0;
  let total = iHave;

  while (total >= bottle) {
    let newb = Math.floor(total / bottle) * setCount;
    let left = total % bottle;
    total = newb + left;
    answer += newb;
  }

  return answer;
}
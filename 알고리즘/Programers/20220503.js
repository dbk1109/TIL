//키패드 누르기
function solution(numbers, hand) {
  let result = "";
  let leftPo = 10; //*
  let rightPo = 12; //#
  const leftOnly = [1, 4, 7, 10];
  const rightOnly = [3, 6, 9, 12];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num == 0) {
      num = 11;
    }
    function calcFar(h) {
      let targetNum = Math.abs(h - num);
      let calcNum = parseInt(targetNum / 3) + (targetNum % 3);
      while (calcNum > 4) {
        calcNum = parseInt(calcNum / 3) + (calcNum % 3);
      }
      return calcNum;
    }

    if (leftOnly.includes(num)) {
      left(num);
    } else if (rightOnly.includes(num)) {
      right(num);
    } else if (calcFar(leftPo) < calcFar(rightPo)) {
      left(num);
    } else if (calcFar(leftPo) > calcFar(rightPo)) {
      right(num);
    } else if (hand === "right") {
      right(num);
    } else {
      left(num);
    }
  }
  function left(num) {
    result += "L";
    leftPo = num;
  }
  function right(num) {
    result += "R";
    rightPo = num;
  }

  return result;
}
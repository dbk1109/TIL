//가장 가까운 같은 글자
function solution(s) {
    return [...s].map((x, i) => s.indexOf(x) === i ? -1 : i - s.slice(0, i).lastIndexOf(x));
}

//두 개 뽑아서 더하기
function solution(numbers, arr = []) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (i != j) arr.push(numbers[i] + numbers[j]);
    }
  }
  return arr.sort((a, b) => a - b).filter((x, i) => arr.indexOf(x) === i);
}

//푸드 파이트 대회
//function solution(food) {
//  let obj = {};
//  var answer = [];
//  for (let f in food) {
//    obj[f] = food[f];
//  }
//  for (let i = 1; i < food.length; i++) {
//    let arr = [];
//    obj[i] % 2 === 0 ? arr.push(`${obj[i]}`.repeat(obj[i] / 2)) : 0;

//    console.log('"', i, '" = ', obj, arr);
//    for (let j = 0; j < food.length; j++) {
//      console.log("> ", i, j);

//      while (obj[food[j]] > 0) {
//        arr.push(obj[food[j]]);
//        arr.length === 2 ? answer.push(arr) : obj[food[j]]--;
//        console.log(">> ", obj[food[j]], arr);
//      }
//      arr = [];
//    }
//  }
//  return obj;
//}
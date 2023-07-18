//가까운 수
//가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
function solution(array, n) {
  let obj = new Map();
  let SubArr = array.map((x) => Math.abs(n - x));
  let min = Math.min(...SubArr);
  for (el in array) {
    obj[array[el]] = SubArr[el];
  }
  return Number(Object.keys(obj).find((key) => obj[key] === min));
}
// reduce 사용법 공부해야겠다.
//return array.reduce((a, c) =>
//  Math.abs(a - n) < Math.abs(c - n)
//    ? a
//    : Math.abs(a - n) === Math.abs(c - n)
//      ? Math.min(a, c)
//      : c
//);

//영어가 싫어요
function solution(numbers) {
    let book = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i = 0; i < book.length; i++) {
        numbers = numbers.replaceAll( book[i], book.indexOf(book[i]) );
    }
    return Number(numbers);
}

//한 번만 등장한 문자

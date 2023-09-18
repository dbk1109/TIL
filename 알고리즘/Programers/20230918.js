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
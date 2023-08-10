//수열과 구간 쿼리 1
function solution(arr, queries) {
    queries.map( query => arr.map((x, idx) => query[0] <= idx && idx <= query[1] ? arr[idx]++ : arr[idx]) ); 
    return arr;
}
//  쉽게 생각하자
//function solution(arr, queries) {
//    queries.forEach(([s, e]) => { while (s <= e) arr[s++]++; });
//    return arr;
//}

//수열과 구간 쿼리 2
function solution(arr, queries) {
  let answer = [];
  queries.forEach(([s, e, k]) => {
    let min = Math.min(...arr.slice(s, e + 1).filter((x) => x > k));
    if (min === Infinity) min = -1;
    answer.push(min);
  });
  return answer;
}
//  한줄로는 이렇다. sort해서 처음껄 넣던지 아님 -1을 해라....
//  return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);


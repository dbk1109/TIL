//수열과 구간 쿼리 4
function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        for(let i = s; i <= e; i++) {
            if (i % k === 0) { arr[i]++; }
        }
    })
    return arr;
}

//카운트 업
function solution(start, end) {
  var answer = [];
  for (let i = start; i <= end; i++) {
    answer.push(i);
  }
  return answer;
}
//  array가 아니면 만들면 될 일!
//  return Array(end-start+1).fill(start).map((x,idx) => x+idx);


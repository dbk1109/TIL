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

//콜라츠 수열 만들기
function solution(n) {
  var answer = [];
  while (n != 1) {
    answer.push(n);
    n % 2 === 0 ? (n = n / 2) : (n = 3 * n + 1);
  }
  answer.push(1);
  return answer;
}
//  재귀는 늘 어렵군
//function solution(n, arr = []) {
//  arr.push(n);
//  if (n === 1) return arr;
//  if (n % 2 === 0) return solution(n / 2, arr);
//  return solution(3 * n + 1, arr);
//}

// 배열 만들기 2
//
//////  솔직히 다시하자
//
//function solution(l, r) {
//  const answer = [];
//  for (let i = l; i <= r; i++) {
//    if (i.toString().replace(/[05]/g, "").length === 0) {
//      answer.push(i);
//    }
//  }
//  return answer.length === 0 ? [-1] : answer;
//}
//  하!
//function solution(l, r) {
//  const result = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(
//    (n) => !/[^05]/.test(n)
//  );
//  return result.length ? result : [-1];
//}

//배열 만들기 4
function solution(arr) {
    var stk = [];
    let i = 0;
    while (i < arr.length) { 
        stk.length === 0 || stk[stk.length -1] < arr[i] ? (stk.push(arr[i]), i++) : stk.pop()
    }
    return stk;
}
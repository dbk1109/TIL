//수열과 구간 쿼리 3
function solution(arr, queries) {
  queries.forEach(([i, j]) => {
    let T = arr[i];
    arr[i] = arr[j];
    arr[j] = T;
  });
  return arr;
} 
//  이걸 찾았었는데
//[arr[i],arr[j] = [arr[j],arr[i]];


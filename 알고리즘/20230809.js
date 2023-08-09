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
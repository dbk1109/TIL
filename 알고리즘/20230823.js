//왼쪽 오른쪽
function solution(str_list) {
  for (l of str_list) {
    if (l == "l") return str_list.slice(0, str_list.indexOf("l"));
    if (l == "r") return str_list.slice(str_list.indexOf("r") + 1);
  }
  return [];
}
//  너무 복잡하게 생각하지 않아도 된다!

//홀수 vs 짝수
function solution(num_list) {
    let CHECKER = [[],[]];
    num_list.map((x, i) => i%2 === 0 ? CHECKER[1].push(x) : CHECKER[0].push(x))
    let ODD = CHECKER[0].reduce((sum, val) => sum + val)
    let EVEN = CHECKER[1].reduce((sum, val) => sum + val)
    return ODD >= EVEN ? ODD : EVEN;
}
//  훨씬 간단한걸..?
//function solution(num_list) {
//  let [even, odd] = [0, 0];
//  num_list.map((v, idx) => {
//    !(idx % 2) ? (even += v) : (odd += v);
//  });
//  return odd > even ? odd : even;
//}

//5명씩
function solution(names) {
  return names.filter((_, i) => i % 5 === 0);
}
//const solution = (names) => names.filter((_, i) => !(i % 5)); 이렇게도 됨

//할 일 목록
const solution = (todo_list, finished) => todo_list.filter((_, i) => !finished[i]);
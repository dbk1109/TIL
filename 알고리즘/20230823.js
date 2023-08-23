//왼쪽 오른쪽
function solution(str_list) {
  for (l of str_list) {
    if (l == "l") return str_list.slice(0, str_list.indexOf("l"));
    if (l == "r") return str_list.slice(str_list.indexOf("r") + 1);
  }
  return [];
}
//  너무 복잡하게 생각하지 않아도 된다!

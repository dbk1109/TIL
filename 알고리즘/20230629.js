//옷가게 할인 받기
//function solution(price) {
//  if (price >= 100000 && price < 299999) {
//    return parseInt(price * 0.95);
//  } else if (price >= 300000 && price < 499999) {
//    return parseInt(price * 0.9);
//  } else if (price >= 500000) {
//    return parseInt(price * 0.8);
//  } else {
//    return parseInt(price);
//  }
//}
function solution(price) {
  if (price >= 500000) {
    price = price * 0.8;
  } else if (price >= 300000) {
    price = price * 0.9;
  } else if (price >= 100000) {
    price = price * 0.95;
  } 
  return parseInt(price);
}
//이건답지
//const discounts = [
//  [500000, 20],
//  [300000, 10],
//  [100000, 5],
//];
//function solution(price) {
//  for (const discount of discounts)
//    if (price >= discount[0])
//      return Math.floor(price - (price * discount[1]) / 100);
//  return price;
//};

//모음 제거
function solution(my_string) {
  return my_string.replaceAll(/['a','e','i','o','u']/g, "");
}
//스포당해서 이거로 한것뿐이지 내실력은 아니다.

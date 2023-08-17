//주사위 게임 3
//function solution(a, b, c, d) {
//    const arr = [a, b, c, d];
//    let counter = 0;
//    let [p, q, r] = [];
//    for(let i = 0; i < 3; i++) {
//        for(let j = i+1; j < 4; j++) {
//            if(arr[i] === arr[j]) {
//                counter++;
//                p == undefined || p == arr[i] ? p = arr[i] : q = arr[i];
//            } else {
//                q == undefined || q == arr[i] || p == q ? q = arr[i] : r = arr[[p,q].includes(arr[i])? j :i];
//            }
//        }
//    }
//    switch(counter) {
//        case 6 : return (1111 * a);
//        case 3 : return (Math.pow(10 * p + q, 2));
//        case 2 : return ((p + q) * Math.abs(p - q) );
//        case 1 : return (q * r);
//        case 0 : return (Math.min(a, b, c, d));
//    }
//}

//접미사인지 확인하기
function solution(my_string, is_suffix) {
    return my_string.indexOf(is_suffix, my_string.length - is_suffix.length) === -1 ? 0 : 1;
}
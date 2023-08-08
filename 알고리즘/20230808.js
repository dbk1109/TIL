//코드 처리하기
function solution(code) {
    let ret = '';
    let mode = 0;
    code.split('').map((x, idx) => {
        mode ? (
            x === "1" ? mode = 0 : (idx%2!=0 ? ret += x : ret)
        ) : (
            x === "1" ? mode = 1 : (idx%2===0 ? ret += x : ret) 
        )
    })
    return ret.length > 0 ? ret : "EMPTY";
 }

 //등차수열의 특정한 항만 더하기
function solution(a, d, included) {
    return included.map( (x, idx) => x ? a + (d * idx) : 0 ).reduce((sum, val) => sum + val)
}
//  reduce만 쓰는 방법
//    return included.reduce((acc, flag, i) => {
//      return flag ? acc + a + d * i : acc;
//    }, 0);


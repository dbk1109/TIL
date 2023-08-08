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
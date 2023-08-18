//주사위 게임 3
function solution(a, b, c, d) {
    let obj = {};
    for (dice of [a, b, c, d]) {
        obj[dice] ? obj[dice]++ : obj[dice] = 1
    }
    let [p, q, r] = Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]}).map(x => Number(x));
    switch(Object.values(obj).length) {
        case 1 : return 1111 * a; break;
        case 2 : return Object.values(obj).sort((a,b) => b-a)[0] === 3 ? 
            (Math.pow(10 * p + q, 2)) : (p + q) * Math.abs(p - q); break;
        case 3 : return q * r; break;
        default : return Math.min(a, b, c, d);
    }
}

//접미사 배열

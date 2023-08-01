//등수 매기기
function solution(score) {
    let arr = [];
    let nexter = 1;
    score.map(x => arr.push(((x[0] + x[1]) / 2)));
    let rank = [...arr].sort((a,b) => b-a);
    function replacer(array, target, ranks) {
        for(i in array) {
            if(array[i] === target) array[i] = ranks.toString();
        }
    }
    for (let i = 0; i < score.length; i++, nexter++) {
        replacer(arr, rank[i], nexter);
    }
    return arr.map(x => Number(x));
}
// 미친
//function solution(score) {
//  return score.map((el) => {
//    return (
//      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
//    );
//  });
//}

//옹알이 (1)
function solution(babbling) {
  let words = ["aya", "ye", "woo", "ma"];
  for (word of words) {
    for (index in babbling) {
      babbling[index] = babbling[index].replace(word, "*");
    }
  }
  return babbling.filter((x) => !x.match(/[a-z]/)).length;
}
// 와 그 자체를 비교해버리는것도 된다
//regex = /^(aya|ye|woo|ma)+$/;

//치킨 쿠폰
function solution(chicken) {
    if(chicken / 10 < 1 ) return 0;
    return Math.floor(chicken / 10) + solution(Math.floor(chicken / 10) + (chicken % 10));
}
// 잘했다고 생각했는데 이건뭘까 세상에 참굇수가 많다.
//function solution(chicken) {
//    if (chicken == 0) return 0;
//    return Math.floor(((chicken -10) / 9) + 1) // 처음 10마리를 사야 서비스1마리+1쿠폰 생성, 
//                                               // 그 다음부터는 1쿠폰+9마리 구매 = 1마리 서비스.
//                                               // 그래서 사실상 9마리를 구매하면 1마리 서비스를 받는다. 
//                                               // 9마리 구매시 받는 서비스를 계산하고 난 후에 처음 10마리를 구매하여 생긴 1마리의 서비스를 추가하였다.
//     10마리 구매                     9마리 구매                       9마리 구매
//    🍗🍗🍗🍗🍗
//    🎟️🎟️🎟️🎟️🎟️
//                   =  서비스🍗      🍗🍗🍗🍗
//    🍗🍗🍗🍗🍗            🎟️  +   🎟️🎟️🎟️🎟️ 
//    🎟️🎟️🎟️🎟️🎟️                  🍗🍗🍗🍗🍗    =    서비스🍗      🍗🍗🍗🍗
//                                  🎟️🎟️🎟️🎟️🎟️                🎟️  +   🎟️🎟️🎟️🎟️    
//                                                                     🍗🍗🍗🍗🍗    =  ....
//                                                                     🎟️🎟️🎟️🎟️🎟️
//    // return parseInt(((chicken -10) / 9) + 1) 
//    // parseInt를 사용하면 정수를 뽑아 리턴한다, Math.floor는 negative 숫자도 반환하기 때문에 결과가 다르게 나타난다.
//}
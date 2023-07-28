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
//로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  const correct = lottos.filter((lottos) => win_nums.includes(lottos)).length;
  const zero = lottos.filter((lottos) => lottos === 0).length;

  let min = 7 - correct >= 6 ? 6 : 7 - correct;
  let max = min - zero < 1 ? 1 : min - zero;

  var answer = [max, min];

  return answer;
}
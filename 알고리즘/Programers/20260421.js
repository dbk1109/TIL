//명예의 전당 (1)
function solution(k, score) {
  let lowScores = [];
  let Honor = [];

  for (i = 0; i < score.length; i++) {
    Honor.push(score[i]);
    Honor.sort((a, b) => b - a);
    Honor = Honor.slice(0, k);
    lowScores.push(Honor[Honor.length - 1]);
  }

  return lowScores;
}

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

//카드 뭉치
function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] == cards1[0]) {
      cards1.shift();
    } else if (goal[i] == cards2[0]) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
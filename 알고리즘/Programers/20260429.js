//모의고사
function solution(answers) {
  let P = [0, 0, 0];
  let Winner = [];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % p1.length]) P[0]++;
    if (answers[i] === p2[i % p2.length]) P[1]++;
    if (answers[i] === p3[i % p3.length]) P[2]++;
  }

  for (let j = 0; j < 3; j++) {
    if (P[j] == Math.max(...P)) Winner.push(j + 1);
  }

  return Winner;
}

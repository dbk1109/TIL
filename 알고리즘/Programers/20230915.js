//K번째수
function solution(array, commands) {
  return commands.map(
    (x, i) => array.slice(x[0] - 1, x[1]).sort((a, b) => a - b)[x[2] - 1]
  );
}

//가장 가까운 같은 글자
function solution(s) {
    return [...s].map((x, i) => s.indexOf(x) === i ? -1 : i - s.slice(0, i).lastIndexOf(x));
}
//3진법 뒤집기
const solution1 = (n) => parseInt([...n.toString(3)].reverse().join(""), 3);

//이상한 문자 만들기
const solution2 = s => s.split(" ").map(el => [...el].map((x,i) => i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join('')).join(' ')
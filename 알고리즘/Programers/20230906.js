//3진법 뒤집기
const solution = (n) => parseInt([...n.toString(3)].reverse().join(""), 3);

//이상한 문자 만들기
const solution = s => [...s].map((x,i) => i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join('')
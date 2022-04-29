//숫자 문자열과 영단어
function solution(s) {
  const numberText = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < 10; i++) {
    s = s.split(numberText[i]).join(i);
  }
  return Number(s);
}

//신규 아이디 추천
function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  const len = answer.length;
  //7단계 2자 이하 마지막문자를 길이 3이 될때까지 반복
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
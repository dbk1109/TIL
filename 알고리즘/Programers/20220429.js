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
        "nine"
    ]
    for (let i = 0; i < 10; i++) {
        s = s.split(numberText[i]).join(i);
    }
    return Number(s);
}
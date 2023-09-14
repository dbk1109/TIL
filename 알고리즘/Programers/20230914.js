//문자열 내 마음대로 정렬하기
function solution(strings, n) {
    var mapped = strings.sort().map((el, i) => { return { index: i, value: el[n].toLowerCase() } });
    mapped.sort((a, b) => +(a.value > b.value) || +(a.value === b.value) - 1);
    return mapped.map(el => strings[el.index]);
}
//  object로 만들어서 index를 보전하고 그걸 다시 map으로 정렬 하는방법
//  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
//    localeCompare() 메서드는 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환합니다.

//[1차] 비밀지도
function solution(n, arr1, arr2) {
  arr1 = arr1.map((el) => el.toString(2).padStart(n, "0"));
  arr2 = arr2.map((el) => el.toString(2).padStart(n, "0"));
  let answer = [];
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      line += arr1[i][j] + arr2[i][j] >= 1 ? "#" : " ";
    }
    answer.push(line);
  }
  return answer;
}
//  |의 사용법을 조금 더 찾아보자. 비트연산자!
//  arr1.map((arr1,i)=>(arr1|arr2[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
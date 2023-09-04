//행렬의 덧셈
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let inner = [];
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i][j] + arr2[i][j]) inner.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(inner);
  }
  return answer;
}
//  map 안에 map 으로 더 짧게
function solution(arr1, arr2) {
  return arr1.map((x, i) => (x = x.map((y, j) => x[j] + arr2[i][j])));
}

//직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 1; i <= b; i++) {
    console.log("*".repeat(a));
  }
});

//최대공약수와 최소공배수
//최대공약수를 구하는 가장 쉬운 방법은 2부터 min(A, B)까지 모든 정수로 나누어보는 방법이다.
//두 수, 혹은 그 이상의 여러 수의 공통인 배수 중 가장 작은 수이다.
//  lcm을 1부터 시작하여 점차 lcm++하면서 각각의 두 수를 lcm으로 나누었을 때 나머지 값이 0인지를 비교한다.
//유클리드 호제법의 기본 원리는 num1를 num2로 나눈 나머지를 r이라고 했을 때, GCD(num1, num2) = GCD(num2, r)과 같다는 것이다.
//최대공배수와 최대공약수의 관계 => 두 수의 곱 / 최대공약수 = 최소공배수
function solution(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}
// 0이 나오면 for문이 종료되는걸 조건으로 사용해서 for문 적극 활용함
//function solution(a, b) {
//  var r;
//  for (var ab = a * b; (r = a % b); a = b, b = r) {}
//  return [b, ab / b];
//}


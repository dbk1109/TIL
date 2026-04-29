//기사단원의 무기
function solution(number, limit, power) {
  const counts = Array(number + 1).fill(0);
  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      counts[j]++;
    }
  }
  return counts.reduce((a, c) => {
    return c <= limit ? a + c : a + power;
  }, 0);
}

/// 맨날 까먹는데, 약수란, 나눴을 때 나머지가 0인 수임.
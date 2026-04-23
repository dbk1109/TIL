//추억 점수
function solution(name, yearning, photo) {
  const NnY = new Map(name.map((v, i) => [v, yearning[i]]));

  const result = photo.reduce((acc, cur) => {
    acc.push(cur.reduce((a, e) => a + (NnY.get(e) || 0), 0));
    return acc;
  }, []);

  return result;
}

//폰켓몬
function solution(nums) {
  const MAX = nums.length / 2;
  const SORT = [...new Set(nums)].length;
  return MAX < SORT ? MAX : SORT;
}
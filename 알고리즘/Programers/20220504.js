//최소직사각형
function solution(sizes) {
  let Ws = [];
  let Hs = [];
  // 전체 정렬 먼저
  for (let i = 0; i < sizes.length; i++) {
    let size = sizes[i];
    Ws.push(Math.max(size[0], size[1]));
    Hs.push(Math.min(size[0], size[1]));
  }
  return Math.max(...Ws) * Math.max(...Hs);
}
let NOW = "17 40";
let GUESS = 80;
let [NOW_H, NOW_M] = NOW.split(" ").map(Number);
let NEW_MIN = NOW_M + GUESS;

if (NEW_MIN >= 60) {
  NEW_MIN = NEW_MIN - 60;
  NOW_H++;
  if (NOW_H >= 24) {
    NOW_H = 24 - NOW_H;
  }
}
console.log(NOW_H, " ", NEW_MIN);

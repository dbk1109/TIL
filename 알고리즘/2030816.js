//주사위 게임 3

let counter = 0;
// //     if(a == b || a == c || a == d || b == c || b == d || c == d) counter++;
// //     return counter == 0 ? [a, b, c, d].sort((a,b) => a - b)[0] : (
// //         a == b && b == c && c == d ? 1111*a : (

// //         )
// //     );
let arr = [a, b, c, d].sort((a, b) => a - b);
let singleArr = arr.filter((v, i) => arr.indexOf(v) === i);

function chekcer(x, i) {
  for (let i = 0; i < arr.length; i++) {
    arr[x] == arr[i] ? counter++ : counter;
  }
  return counter;
}

console.log(arr);
for (let i = 0; i < arr.length; i++) {
  //         let next = arr[i+1 === undefined ? 0 : i+1];
  //         console.log( arr[i+1], arr[i+1] === undefined, arr[i],next, arr[i] == next)
}

//     for (let p of arr) {
//         switch(p){
//             case 'left': if (-arr[0] < board[0]/2-1) arr[0]--; break;
//             case 'M3': if
//         }
//     }

//     return (
//         singleArr.length == 1 && counter == 3 ? (arr[0] * 1111) : (
//             counter == 3 ? arr[0] : counter
//         )
//     )

const result = {};
arr.forEach((x) => {
  result[x] = (result[x] || 0) + 1;
});
return Object.values(result).sort((a, b) => a - b);
// return Object.keys(result).length

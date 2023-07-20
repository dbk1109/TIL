  //소인수분해
  function solution(n) {
  var answer = [];
  let checker = 2;
  while (n >= 2) {
    if (n % checker === 0) {
      n = n / checker;
      answer.push(checker);
    } else {
      checker++;
    }
  }
  return [...new Set(answer)];
  }
  /// new Set() 은 중복값을 제거하기 때문에 중요!!!

  //컨트롤 제트
  function solution(s) {
    let arr = s.split(" ");
    while (arr.indexOf("Z") != -1) {
        arr.splice(arr.indexOf("Z")-1, 2);
    } 
    return arr.length != 0 ? Number(arr.reduce( (sum, val) => Number(sum) + Number(val) )) : 0;
  }

  //중복된 문자 제거
  function solution(my_string) {
  return [...new Set(my_string.split(""))].join("");
  }
  ///생성자 함수 또한 바로 Spread 연산자 가능
  //return [...new Set(my_string)].join('');

  //A로 B 만들기
  function solution(before, after) {
  return [...before].sort().join("") == [...after].sort().join("") ? 1 : 0;
  }

  //k의 개수
  function solution(i, j, k) {
    let counter = 0;
    while(i <= j ) {
        counter += i.toString().split('').filter((word) => word == k).length;
        i++;
    }
    return counter;
  }
  // split 으로 나눠가지고 하는 방법도있음
  //let a = "";
  //for (i; i <= j; i++) { a += i; }
  //return a.split(k).length - 1;

  //직사각형 넓이 구하기
  //Math.sqrt 루트 Math.pow(숫자, 배수)
  function solution(dots) {
    dots.sort();
    return Math.abs((dots[dots.length-1][0]-dots[0][0]) * (dots[dots.length-1][1]-dots[0][1]));
  }
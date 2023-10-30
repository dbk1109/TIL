## 분야/언어
  - [ ] HTML
  - [x] CSS
  - [ ] SVG
  - [ ] GraphQL
  - [ ] Vanilla JavaScript
  - [ ] Typescript

## 발견 경로
[Nomad Coders Slack 스레드](https://nomadcoders.slack.com/archives/CCHLQEXP1/p1698076006804759)

## 알게된것들
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body {
      background-color: gray;
      padding: 20px;
    }

    input {
      width: 100%;
    }

    .Wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
      margin: 40px auto 20px;
      /* 임의추가 시작 */
      background-color: white;
      padding: 20px;
      /* 임의추가 끝 */
    }

    .CategoryContainer {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      background-color: pink;
    }
  </style>
</head>
<body>
  <main class="Wrapper">
    <h1>Simple Todo List</h1>
    <div class="CategoryContainer">
      <select name="select" id="">
        <option value="select">select</option>
      </select>
      <button>Add category</button>
    </div>
    <input type="text" value="press enter"/>
  </main>
</body>
</html>
```

## 후기
Wrapper에 align-items:center를 적용하면 가운데정렬을 해야하니까 자식요소가 inline으로 바뀜.
## 분야/언어
  - [ ] HTML
  - [x] CSS
  - [ ] SVG
  - [ ] GraphQL
  - [ ] Vanilla JavaScript
  - [ ] Typescript

## 발견 경로
[Grid-garden 게임](https://codepip.com/games/grid-garden/#ko)

## 알게된것들
- `grid-area: grid-row-start, grid-column-start, grid-row-end, grid-column-end`
    > `grid-column: grid-column-start / grid-column-end` <br/>
    > `grid-row: grid-row-start / grid-row-end`

    - 1번 선에서 4번 선까지 처럼 각각 지정 가능
    - 음수로 오른쪽부터 카운팅해서 사용 가능
    - `span 1` 같이 사용하면 그리드 수로 넓어진다.
- `order: 0`: element기준 순서 +- 변경
- `grid-template: grid-template-rows / grid-template-columns`
    - `repeat(5, 20%)`와 같이 함수 사용가능
    - `1fr 4fr` 처럼 공간을 나눠 지정가능. px, %, ems와 같이 사용시 fr로 설정된 다른 그리드의 남은 공간으로 나뉘어짐.
    - `50px repeat(3, 1fr) 50px`처럼 혼합사용 가능

## 후기
[Grid-garden 게임](https://codepip.com/games/grid-garden/#ko) 통해서 배웠던것들 다시 정리할 수 있어서 좋았음

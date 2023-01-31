## 분야/언어
  - [ ] HTML
  - [x] CSS
  - [x] SVG
  - [ ] GraphQL
  - [ ] Vanilla JavaScript
  - [ ] Typescript

## 발견 경로
[외국 홈페이지](https://www.thecheckout.klarna.com/)에서 처음 five라는 SVG(텍스트)가 픽셀로 등장하는걸 보고 흥미를 느껴 뜯어보게됨.

## 알게된것들
- `shape-rendering: crispedges;`
  -> 상위그룹(SVG 태그) 클래스 코드. `crispedges`는 깨끗한 가장자리의 대비를 강조하여 렌더링됨.
- `fill: currentcolor;`
  -> svg의 컬러를 각자 다르게 다시 설정해줘야 하는 문제를 해결함. `h1 {color: red; fill:currentcolor;}`등으로 사용시 `red`를 상속.
- 최적화 애니매이션 `Pixels.svg`과 사례
  - [Pixels.svg conversion](https://codepen.io/shshaw/pen/XbxvNj)
  - [설명과 사례](https://codepen.io/shshaw/post/vector-pixels-svg-optimization-animation-and-understanding-path-data)

## 그럼에도 불구하고
- 아직도 불규칙하게 + 스크롤액션과 묶어서 어떤식으로 구현했는지 감을 잡지 못했다.
## 분야/언어
  - [ ] HTML
  - [x] CSS/SCSS
  - [ ] SVG
  - [ ] GraphQL
  - [ ] Vanilla JavaScript
  - [ ] Typescript

## 발견 경로

## 알게된것들
```
@mixin Title($title) {
  @if ($title == "T") {
    color: red;
  } @else {
    color: blue;
  }
}
```

extend를 사용하면 컴파일 시 css 파일에서 해당 속성을 가진 값들이 한곳에 묶이게 됩니다.
ex) btn_1, btn_2, btn_3 { color: blue}

mixins를 사용하면 개별로 적용이 됩니다.
ex) btn_1 { color: blue}
btn_2 { color: blue}
btn_3 { color: blue}

## 후기


## 분야/언어
  - [ ] HTML
  - [x] CSS
  - [ ] SVG
  - [ ] GraphQL
  - [ ] Vanilla JavaScript
  - [ ] Typescript

## 발견 경로
강의[1](https://nomadcoders.co/css-layout-masterclass/lectures/1370)[2](https://nomadcoders.co/css-layout-masterclass/lectures/1371)를 보다가 제대로 이해하기 위해서 기록함.

## 알게된것들
- `flex-shrink: 1;`: flex-wrap: nowrap일때 특정 element만 더 **줄어들게** 설정가능
- `flex-grow: 0;`: shrink와 반대, 화면이 늘어남에 따라 여백을 설정된 element가 값대로 나눠가짐. (남아있는 공간, 여백이 있을 때만 grow 가능)
- `flex-basis`: flex가 가로축일때 `width`와 같음.

## 다시 정리하게 된것들
- `flex-self`: 자식요소 위치 재구성
- `flex-flow`: 자주 안써서 까먹지말자. direction과 wrap 합칠때 사용함
- `align-content` 와 `align-items`: content는 줄 사이 간격(정렬은 그대로). items는 정렬방법

## 후기
[Flexbox Froggy 게임](http://flexboxfroggy.com/#ko) 통해서 배웠던것들 다시 정리할 수 있어서 좋았음
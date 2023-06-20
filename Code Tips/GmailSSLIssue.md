## 에러

등록폼으로 내용작성 후 팔로우 이메일 전송 시 네이버 및 자사 이메일 아웃룩으로는 발송되나 구글 이메일로는 이메일이 오지 않는 현상발생

## 환경

카페24 매니지드 워프 + 구매 도메인 + 무료 웹메일 사용

## 테스트

1. 무료 웹메일로 생성한 no-reply@domain.com등으로 보내려 smtp를 php 그대로 두는 상태에서 진행해보려 했음. 구글 등으로 아웃메일 설정하면 그대로 되지만 from email이 gmail로 변경되기 때문에 실패.
2. 자체 서버에서 확인결과 전송은 정상적으로 되었다고 뜸

## 결과

카페24에서 기본으로 제공되는 무료SSL은 한쪽에만 걸리고 매니지드로 걸어주는 SSL은 오류가 있는듯 해 따로 발급받은 SSL 적용 후 재발송하니 지메일로 정상적으로 수신됨
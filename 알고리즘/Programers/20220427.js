//신고 결과 받기
function solution(id_list, report, k) {
  //report를 set을 이용하여 중복 리포트 되지않도록 방지 후 다시 array로 만듬
  let reportArr = [...new Set(report)];
  //report를 각각 split해서 신고자 피신고자 나눔
  let reportedBy = [];
  let reportedID = [];
  for(i=0;i<reportArr.length;i++) {
      let el = reportArr[i];
      reportedBy.push(el.split(' ')[0]);
      reportedID.push(el.split(' ')[1]);
  }
  //피신고자를 map해서 숫자로 정리
  let reportedCount = reportedID.reduce((accu,curr)=> {
    accu.set(curr, (accu.get(curr)||0) +1) ;
    return accu;
  },new Map());
  // k>=2인 user 찾아서 블랙리스트
  let blackList = [];
  id_list.forEach((el) => {
      let eachCount = reportedCount.get(el);
      if (eachCount >= k) {
          blackList.push(el);
      }
  })
  // 블랙리스트 신고한 사람 찾기
  let mailList = [];
  blackList.forEach((el) => {
      let idx = reportedID.indexOf(el);
      while (idx != -1) {
          mailList.push(reportedBy[idx]);
          idx = reportedID.indexOf(el, idx + 1);
      }
  })
  let mailCount = mailList.reduce((accu,curr)=> {
    accu.set(curr, (accu.get(curr)||0) +1) ;
    return accu;
  },new Map());
  // 이메일 보내기 카운터
  let result = [];
  id_list.forEach((el) => {
      if (mailCount.get(el) != undefined) {
          result.push(mailCount.get(el));
      } else {
          result.push(0);
      }
  })
  return result;   
}
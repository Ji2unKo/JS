const version = navigator.userAgent;
const isIE = /trident/i.test(version);

if(isIE){
  alert("IE는 지원이 종료된 브라우저입니다. 크롬 브라우저를 이용해주세요.")
  location.href = "https://www.google.com/intl/ko_kr/chrome/";
}
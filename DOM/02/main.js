/*
 이벤트가 발생한 대상 알아내기
 
 e.target : 이벤트가 발생했을때 마우스 포인터 위치해 있는 요소를 반환

 e.currentTarget : 이벤트가 발생했을때 이벤트 문상에서 선택자 요소를 반환

*/

const main = document.querySelector('main');

main.addEventListener('click', e=> {
  console.log(e.target)
})


c

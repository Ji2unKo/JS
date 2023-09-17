/*
 innerWidth  : 브라우저 안쪽의 넓이값 반환
 innerHeight : 브라우저 안쪽의 높이값 반환
 outerWidth : 브라우저의 프레임을 포함한 넓이값 반환
 outerHeight : 브라우저의 프레임을 포함한 높이값 반환
 scrollY : 현재 스크롤된 브라우저의 Y축 거리값
 scrollX : 현재 스크롤된 브라우저의 X축 거리값
*/

window.addEventListener("resize", e=>{ 
  console.log(window.innerWidth);
})

window.addEventListener("scroll", e => {
  console.log(`y축 : ${window.scrollY}`)
  console.log(`x축 : ${window.scrollX}`)
})


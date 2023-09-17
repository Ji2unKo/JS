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

const version = navigator.userAgent;
console.log(version);

const isWhale = /whale/i.test(version);
const isEdg = /edg/i.test(version);
const isIE = /trident/i.test(version);


if(isWhale){
  console.log("Whale 브라우저로 접속했습니다.");
  document.querySelector("body").style.backgroundColor = "lightgreen"
;}

if(isEdg){
  console.log("Edge 브라우저로 접속했습니다.");
  document.querySelector("body").style.backgroundColor = "lightgblue"
}

if(isIE){
  document.querySelector("body").style.backgroundColor = "light"
  console.log("IE 브라우저로 접속했습니다.");
}

if(!isWhale && !isEdg && !isIE){
  document.querySelector("body").style.backgroundColor = "lightpink"
  console.log("Chrome 브라우저로 접속했습니다.");
}
/*
  setTimeout : 일정 시간 뒤에 특정 코드를 호출 (지연)
  setInterval : 일정 시간 간격마다 특정 코드를 반복 (반복)
*/

const box = document.querySelector("#box");
/*
box.addEventListener("click", e=>{
  setTimeout(()=>{
    console.log("clicked!!!");
  },3000);
})
*/

let timer = null;

box.addEventListener("mouseenter", e=>{
  timer = setInterval(()=>{
    console.log("mouseenterd!!")
  },1000);
})

box.addEventListener("mouseleave", e=>{
  console.log("mouseleaved!!")
  clearInterval(timer);
})

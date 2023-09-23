/*
모니터의 화면 주사율 : hz (보통의 모니터 60hz)
1초 몇번의 프레임을 쏘는지에 대한 단위

setInterval vs requestAnimationFrame
setInterval - 1초에 천번 반복가능
requestAnimationFrame - 화면주사율에 맞게 자동 반복기능
*/

const btn =  document.querySelector('button');
const box =  document.querySelector('#box');
let num = 0;

btn.addEventListener('click', e=>{
  requestAnimationFrame(move);
})

function move(){
  if(num < 200){
    num++;
    requestAnimationFrame(move)
  } else {
    num = 200;
  }
  box.style.marginLeft = num+'px';
}
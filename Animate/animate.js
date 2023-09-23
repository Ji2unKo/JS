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
let startTime = null;

btn.addEventListener('click', e=>{
  requestAnimationFrame(move);
  startTime = performance.now();
})

function move(time){
  let timeLast = time - startTime;
  if(num < 100){
    num++;
    requestAnimationFrame(move)
    console.log(`반복횟수 : ${num}`);
    console.log(`회차별 누적시간 : ${timeLast}`);
  } else {
    num = 100;
  }
  //box.style.marginLeft = num+'px';
}
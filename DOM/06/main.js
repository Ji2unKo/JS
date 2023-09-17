/*
keydown : 특정 키를 누르고 있을 때
keyup : 특정 키를 누르다 손을 뗄 때
keypress : 키를 누르고 있을 때 (문자관련 키만 동작)
*/

/*
window.addEventListener("keydown", e=>{
  console.log("keydown");
})
*/

window.addEventListener("keyup", e=>{
  console.log("keyup");
 // console.log(e)
 const keyName = e.key;
 console.log(`${keyName}키를 눌렀습니다.`)
})
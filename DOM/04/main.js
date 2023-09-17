const btns = document.querySelectorAll('.list li')
console.log(btns)
/*
for(let i=0; i<btns.length; i++){
  btns[i].addEventListener("click", e=>{
    e.preventDefault();
    console.log(i)
  })
}


for(let btn of btns){
  btn.addEventListener("click", e=>{
    console.log(e.currentTarget)
  })
}
*/

btns.forEach((btn, index)=>{
  btn.addEventListener("click", e=>{
    console.log(index);
  })
})
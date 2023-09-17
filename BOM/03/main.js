/*
for(let i=0; i<3; i++){
  console.log(this)
}


setTimeout(() => {
  console.log(this)
}, 1000);

if(true){
  console.log(this);
}
*/

const btn = document.querySelector('button');
btn.addEventListener('click', function(e){
  console.log(this);
}.bind('window'))
// bind 묶어줌


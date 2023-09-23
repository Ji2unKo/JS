const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

/*box1.addEventListener('click', e => {
  box1.style.backgroundColor = 'hotpink';
})*/

box1.addEventListener('click', e => changBg(box1))

box2.addEventListener('click', e => changBg(box2))

box3.addEventListener('click', e => changBg(box3))

function changBg(selector){
  selector.style.backgroundColor = 'hotponk';
}
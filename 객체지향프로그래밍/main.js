/*const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

box1.addEventListener('click', e => {
  box1.style.backgroundColor = 'hotpink';
})

box1.addEventListener('click', e => changBg(box1))

box2.addEventListener('click', e => changBg(box2))

box3.addEventListener('click', e => changBg(box3))


function changBg(selector){
  selector.style.backgroundColor = 'hotponk';
}
*/

// es6 객체 지향
class Box {
  constructor(selector){
    this.el = document.querySelector(selector); 
    this.el.addEventListener('click', ()=>this.changeBg(this.el) );
  }
  changeBg(selector){
    selector.style.backgroundColor = 'hotpink';
}
}

new Box('.box1');
new Box('.box2');
new Box('.box3');

/*
생성자 함수 : 틀을 만드는 것
인스턴스 (객체) (instance) : 틀을 통해서 복사물
프로토타입 (prototype) : 공용 저장 창고 <생성장 함수를 통해 복사물>
*/

/* es5 객체 지향
function Box(selector){
  this.el = document.querySelector(selector);
  this.el.addEventListenr('click', function(){
    this.changeBg(this.el);
  }.bind(this))
}
Box.prototype.changeBg = function(selector){
  selector.style.backgroundColor = 'hotpink';
}

new Box('.box1');
*/

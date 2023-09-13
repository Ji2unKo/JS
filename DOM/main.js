/*
DOM (Document Object Model) 문서 객체 모델

자식요소 탐색 
: 부모요소.querySelector() 부모요소.children

형제요소 탐색
 : 이전 형제요소 탐색 : 형제요소.previousElementSibling
 : 다음 형제요소 탐색 : 형제요소.nextElementSibling

 부모요소 탐색
 : 현재요소.parentElement;
 : 현재요소.closest()

 유사배열
 : 배열처럼 보이지만 배열을 아닌 그룹요소

*/

const wrap = document.querySelector('#wrap');
const children = wrap.children;
console.log(children[1]);

const box2 = document.querySelector('.box2');
const prevEl = box2.previousElementSibling;
const nextEl = box2.nextElementSibling;
console.log(nextEl);

const a = box2.querySelector('a');
const parentEl = a.parentElement;
const grandParentEl = a.closest('#wrap');
console.log(grandParentEl);



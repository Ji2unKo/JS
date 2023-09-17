const box = document.querySelector('.box');

box.addEventListener("click", e=>{
  e.currentTarget.style.backgroundColor = 'pink';
  e.currentTarget.style.width = 200 + 'px';
})

const box2 = document.querySelector('.box2');

box2.addEventListener("click", e=> {
  const bg = getComputedStyle(e.currentTarget).backgroundColor
  const width = getComputedStyle(e.currentTarget).width;
  console.log(bg);
  console.log(width)
})

const a = document.querySelector('a');

const a_href = a.getAttribute('href');
const a_title = a.getAttribute('title');
console.log(a_href);
console.log(a_title);

a.setAttribute('href', 'https://www.nate.com');;
a.setAttribute('target', '_self ');
a.setAttribute('title', '네이트로 이동');
// a.innerText = '네이트';
console.log(a.innerText);
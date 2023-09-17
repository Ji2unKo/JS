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
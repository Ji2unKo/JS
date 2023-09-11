// for 반복문
const colors = ["red", "pink", "green", " blue", " aqua"];
console.log(colors.length)

for(let i=0; i<colors.length; i++){
  console.log(colors[i]);
}

const classA = [
  {
    name : "Andy",
    age : 20,
    address : "seoul"
  },
  {
    name : "Emma",
    age : 30,
    address : "busan"
  },
  {
    name : "David",
    age : 40,
    address : "daegu"
  }
];


for(let num=0; num<classA.length; num++){
  console.log(classA[num].name);
}

// for of 반복문 : 배열을 반복돌면서 배열의 값을 쓸 때
const colors2 = ["pink", "green", " blue"];
for(let color of colors2) console.log(color)

// for in 반복문 
const student1 = {
  name : "david",
  age : 20,
  hobby : "sports"
}

for(let key in student1){
  console.log(student1[key])
}

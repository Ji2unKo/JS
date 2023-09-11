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

// while -> 조건을 집어넣고 중괄호에 코드를 실행하는 것
// 거의 사용할일은 없음 for문을 사용하는게 효율적 
const cars = ["BMW", "VOLVO", "HYUNDAI"];
 
for(let i=0; i<cars.length; i++){
  console.log(cars[i])
}

let i=0; // 초기값
while(cars[i]){
  console.log(cars[i]);
  i++;
}

// 이터러블 객체 (문자의 반복처리)
const txt = "HELLO";
for(let letter of txt){
  console.log(letter)
}

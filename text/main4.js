// 템플릿 리터럴
const name = "김영희";
const age = 30;

console.log("안녕하세요, 제 이름은 "+name+" 이고 나이는"+age+"살 입니다.")
console.log(`안녕하세요. 제 이름은 ${name}이고 나이는 ${age}입니다.`)

// 배열전용 반복문 forEach, map
// 콜백함수 : 함수호출시 인수로 함수가 들어가는 형태

const colors = ["red", "green", "blue"];

//ES5
//반복처리 기능, 유사배열 (DOMqksqhrrksmd)
colors.forEach((el, index, arr)=>{
  console.log(el);
  console.log(index);
  console.log(arr)
});
    
//ES6
// 반복기능외에 추가로 반복또는 배열을 새로운 배열로 복사
colors.map((el, index, arr)=>{
  console.log(el);
  console.log(index);
  console.log(arr)
});
// 템플릿 리터럴
const name = "김영희";
const age = 30;

console.log("안녕하세요, 제 이름은 "+name+" 이고 나이는"+age+"살 입니다.")
console.log(`안녕하세요. 제 이름은 ${name}이고 나이는 ${age}입니다.`)

// 배열전용 반복문 forEach, map
// 콜백함수 : 함수호출시 인수로 함수가 들어가는 형태

//const colors = ["red", "green", "blue"];

//ES5
//반복처리 기능, 유사배열 (DOMqksqhrrksmd)
//colors.forEach((el, index, arr)=>{
 // console.log(el);
 // console.log(index);
  //console.log(arr)
// });
    
//ES6
// 반복기능외에 추가로 반복또는 배열을 새로운 배열로 복사
//colors.map((el, index, arr)=>{
  //console.log(el);
 // console.log(index);
 // console.log(arr)
//});

// 문자열 .length : 문자열의 길이를 반환
// 문자열 .indexOF() : 찾고자 하는 문자열의 위치 반환
// 문자열 .slice() : 문자열에서 특정 부분을 추출해서 새로운 문자열로 반환
// 문자열 .substr() : 문자열에서 특정 부분을 잘라냄
// 문자열 .replace() : 문자열에서 특정 문자값을 바꿔치기
// 문자열 .split() : 문자열을 배열로 반환

const txt = "Hello World";
console.log(txt.length);
console.log(txt.indexOf("apole")) //-1이라고 나오면 문자값이 없다라는 뜻

const txt2 = txt.slice(0,5);
console.log(txt2);

const txt3 = txt.substr(6,3);
console.log(txt3)

const origin = "학교종이 땡땡땡 어서모이자 선생님이 우리를 기다리신다.";
let result = '';

if(origin.length > 15){
  result = origin.substr(0,15)+"..."
} else {
  result = orgin;
}

// 삼항 연산자 ? 앞의 조건식 참이면 ?뒤의 코드가 실행되고, 거짓이면 : 뒤의 코드가 실행됨
// (origin.length > 15) ? result = origin.substr(0,15)+"..." : result = origin;

console.log(result)

let introduce = "우리 AbC회사는 높은 품질의 제품을 만들고 있으며 ABC라는 회사 브랜드 가치를 높이기 위해서 노력하고 있습니다. 앞으로 우리 ABC회사 제품을 많이 애용해주세요";

// i를 붙이면 대소문자 구분없이 찾아준다(ig)
const intro2 = introduce.replace(/ABC/ig, "BBC"); // "ABC"만 적을 경우에는 앞에만 바꿔줌 ! g는 전체라는 뜻
console.log(intro2);

const colors = "red green blue";
const arr = colors.split(" ");
console.log(arr)
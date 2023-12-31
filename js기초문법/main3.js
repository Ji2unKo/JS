// 함수 (function)
// -- > 자주쓰는 실행코드들을 블록단위로 묶어서 패키징 해놓은 형태
// -- > 자주쓰는 코드들을 기능 단위로 재사용하기 위함
// -- > 함수정의 : 미리 function키워드를 이용해서 자주 쓸 코드들을 묶어서 정의하는 행위
// -- > 함수호출 : 정의되어 있는 함수를 호출을 해야지만 비로서 기능이 실행됨

// 함수의 종류
// 선언적함수 
// 1. 함수에 미리 이림을 붙여서 정의해놓은 형태ㅔ
// 2. 자바스크립트 파일을 읽을때 선언적함수를 우선적으로 읽어줌
// 3. 선언적 함수는 호출위치가 자유로움

// 익명함수
// 1. 함수에 이름이 없이 정희하는 형태
// 2. 익명함수 자체만으로는 호출이 불가능
// 3. 변수에 믹명함수를 대입하거나 (대입형) 특정 이벤트 객체에 대입하는 식으로 호출가능

// 대입형함수
// -> 변수에 익명함수가 대입된 형태

// 즉시실행함수
// -> 함수가 자기자신을 정희하자마자 바로 자신을 호출

plus();

function plus(){
  const num1 = 2;
  const num2 = 3;
  console.log(num1+num2);
}

const minus = function(){
  const num1 =2;
  const num2 =3;
  console.log(num1-num2);
}

minus();

// 즉시실행 함수
// 사용하는 이유 -> 즉시 실행 함수 안쪽의 값들을 캡슐화

(function(){
  const num1 =2;
  const num2 =3;
  console.log(num1+num2)
})();

// 함수의 매개변수, 인수, 리턴값
// 함수 매개변수(parameter)
// - 함수 외부에서 함수 내부로 특정값을 전달하기 위한 통로 이름
// 인수 (argument)
// - 함수를 호출할때 파라미터를 통해서 전달되는 값
// 반환값(return)
// 1. 함수 내부에서 만들어진 값을 함수 호출시 외부로 반환
// 2. 함수구문 실행도중 특정시점에서 강제로 코드를 실행중단이 될 때

function plus2(num1, num2){
//const num1 = 2;
//const num2 = 3;
const result = num1+num2;
console.log(result)
return result;
}

const total = plus2(3.123,5.456);
console.log(total);


// 화살표 함수 (Arrow function)
// -> 기존의 익명함수를 좀더 쓰기 편하게 축약한 형태

// 내부로 전달되는 파라미터가 하나면 괄호는 생략가능
const abc = txt => console.log(txt);
abc("hello");

// 조건문 
// -> 특정조건을 걸어서 해당 조건의 참, 거짓 유무에 따라 분기를 생성
// if(조건식1){
// - 조건식1이 참이면 해당코드 블록을 실행
// - 거짓이면 해당 코드 블록을 무시하고 다음 조건식으로 넘어감
//} else if(조건식2){
// - 조건식2가 참이면 해당 코드 블록을 실행
// - 거짓이면 해당 코드 블록을 무시하고 다음 조건식으로 넘어감
//} else {위의 모든 조건식이 거짓이면 이곳의 코드를 실행하고 종료}

function plus3 (num1, num2){
  if(num1 === undefined || num2 === undefined){
    console.log.console.error("두개의 인수값을 모두 넣어주세요.");
  }
  if(typeof num1 == "number" || typeof num2 !== "number"){
    console.error("두개의 인수값을 모두 숫자로 넣어주세요")
  }
  const result = num1+num2;
  console.log(result);
}

plus3(2,"3");

// 조건문 Switch : 여러개의 코드블록중에서 하나를 선택해야 될 때 사용
// switch(표현식) {
// case A : 실행할 코드 블록 break; 
// case B : 실행할 코드 블록 break; 
// defaut : 실행할 코드 블록 }

// 일 -0 , 월 -1
switch(new Date().getDay()){
  case 0:
   console.log("Sunday");
   break;
   case 1:
   console.log("Monday");
   break;
   case 2:
   console.log("Tuesday");
   break;
   case 3:
   console.log("Wednesday");
   break;
   case 4:
   console.log("Thursday");
   break;
   case 5:
   console.log("Friday");
   break;
   case 6:
   console.log("Saturday");
   break;
};


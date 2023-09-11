// console.log('자바스크립트 실행')

const title = document.querySelector('h1')
console.log(title);

/*
 식별자 : 사용자가 임의로 만드는 명칭
 예약어 : 자바스크립트 자체적으로 특정 기능을 실행하기 위해 예약된 명령어
 실행문 : 특정 명령어를 실행하기 위한 구문

 식별자를 작성할때에는 예약어를 피해야 됨
*/

/*
 변수 : 특정 데이터값을 임시로 저장하는 공간

 쓰는 이유
 1. 특정값을 자주 사용해야 될 때 (성능상의 이점)
 -- 자바스크립트로 하여금 한번 찾은 내용을 또 찾지 않고 재 사용해야 될 때

 2. 반복적인 구문이 값등이 여러코드에 걸쳐서 많이 쓰일 때 (편의상의 이점)

 변수 선언방식
 var (ES5)
 let, const (ES6)

 ECMA Script
  ES5 < 2015 < ES6

  let : 변경될수 있는 값을 저장할 때
  const : 변경되지 않는 값을 저장할 때
*/
// let num = 0;
// console.log(num)
// num =3;
// console.log(num)

// const data = "중요한 데이터";
// console.log(data)
// data = "덮어쓰기한 데이터";
// console.log(data)


// let num; // 변수 선언 (값이 저장될 때 메모리 공간을 생성)
// num = 3; // 변수에 값 할당(변수공간에 값을 저장)

// let = num1 = 5; // 변수를 초기화 (변수를 선언하자마자 값을 할당)

// 변수명 작성시 유의점
// 1. 숫자로 시작 불가
// 2.특수문자 삽입 불가 (_,$)만 가능
// 3. - 사용불가 (마이너스로 쓰고 있는 - 안됨!)
// 4. 예약어 사용불가 (let, const, var)
// 5.한글 사용불가 (사용은 할수는 있지민 특정 시스템사용시 에러날수 있음)
// 6. 자바스크립트는 대소문자 구분 (Apple, apple) 대소문자가 다르면 안되니깐 구분잘하기!

// 연산자 : 특정값을 도출하기 위해 연산을 처리하는 식별자
// 산술연산자 : 수학적인 연산(+, -, /, *, %, ++, --) 
// 대입연산자 : 특정값을 대입하기 위한 연산 (=, +=, -=, *=, /=)
// 비교연산자 : 두개 이상의 값을 서로 비교하기 위한 연산(결과값 반환, true, false)

//let num = 5 ;
//num = num % 2;
// console.log(num);

// let  num1 = 2;
// num1 = num1 +2;
// num1 += 1;
// num++;
// console.log(num1)

// plus++ (후위연산자 : 초기변수값을 먼저 사용하고 그 다음에 값을 증가)
// let plus = 0;
//console.log(plus);
// plus = plus+1

// ++plus( 전위연산자)
let plus2 = 0;
plus2 = plus2+1
console.log(plus2);

// == 값만 비교 
// === 값뿐만이 아닌 자료형까지 같이 비교하는거
let result = (2 ==  "2") // 숫자, 문자 자료형은 다르지만 값으 같기 때문에 true 반환
console.log(result)

let result2 = (2 === "2") // 값은 같지만 숫자, 문자로 자료형이 달라서 false반환
console.log(result2)
// -> 개발을 정밀하기 위해서는 == 보다 === 쓰는게 여러모로 이득 ! 엄격한 비교 해줌

// 자료형  (Data Type)
// 원시형 자료 (Primitve type) : 특정 값이 메모리에 바로 저장 (값만 저장)
// 1. 문자(String)
// 2. 숫자 (Number)
// 3. 논리형 (Boolean : true, false)
// 4. undefined (undefined) : 변수를 선언하고 값을 할당하지 않으면 undefined가 대신 저장 (에러상황)

// 참조형 자료 (reference type) : 값이 위치하고 있는 참조 주소값만 메모리에 저장 (관련내장함수까지 같이 참조)
// 5. null (Object) : 명시적으로 (일부러) 특정 변수의 값을 비워둘 때
// 6. 배열 array : (Object) 연관된 값들을 그룹으로 묶어서 관리하는 자료 형태
// 7. 객체 : (Object) 데이터를 key라는 인덱싱을 통해 자료를 구조적으로 묶어놓은 형태

// 형변환 : 특정조건이 부합되면 자료형이 강제로 변환되는 현상
let num = "2";  //문자
let num2 = 3;  // 숫자
let num3 = 5;  // 숫자
console.log(num+num2+num3)// 235 문자
console.log(num3+num2+num)// 82 문자

// 배열 : Array
//   연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조
const colors = ["red", "green", "blue"];
console.log(colors[2])

colors[0] = "hotpink";
console.log(colors);
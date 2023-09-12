// 문자를 숫자로 변환
// parseInt(변환할값) : 해당값을 정수로 반환
// parseFloat (변환할값) : 해당값을 실수로 반환

const num = "5.8";
const result = parseInt(num); // -> 특정 문자를 숫자로 변환하고 싶을 때 
console.log(result);
console.log(typeof result);
const result2 = parseFloat(num); // 소수점까지 살려서 알려준다
console.log(result2); 

// 배열 내장함수
// toString() : 배열을 문자로 변환
// join() : 구분자를 활용해 문자열로 이어붙이기
// pop() : 배열의 마지막요소 제거 (리턴값으로 잘라낸요소 반환)
// push() : 배열의 끝부분에 새로운 요소 추가 (리턴값으로 배열의 길이 반환)
// shift() : 배열의 첫 부분 요소 제거 (리턴값으로 잘라낸요소 반환)
// unshift() : 배열의 첫 부분에 새로운 요소 추가 (리턴값으로 길이 반환)
// splice(삽입위치, 잘라낼갯수, 추가할 내용) : 배열에 새로운 요소를 잘라서 붙임
// concat() : 두개의 배열 합치기
// slice() : 배열 잘라내기

const colors = ["red", "green", "blue"];
const colors2 = ["aqua", "pink", "violet"]
const colors3 = ["hotpink", "orang"]
// const result3 = colors.toString();
// const result3 =colors.join(" ")
// const result3 =colors.pop()
// const result3 = colors.push("aqua")
// const result3 = colors.shift();
// const result3 = colors.unshift("pink");
// console.log(colors);
// console.log(result3)
// colors.splice(1,1, "pink"); // 0-> 추가 1 -> 삭제
// const result3 = colors.concat(colors2, colors3);
const result3 = colors.slice(1)
console.log(result3)
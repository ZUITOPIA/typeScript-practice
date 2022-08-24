/**
 * Type Inference 타입 추론
 */

let text: string = "hello"; // 뻔한 type이라면 생략도 가능
function print(message) {
  console.log(message);
}
print("hello"); // 문자열도 가능
print(1); // 숫자도 가능

// 문자, 숫자 모두 가능한 이유는 ?
// message의 type을 설정해두지 않으면 자동적으로 type 설정이 any로 되기 때문!
// 고로 message의 타입을 정확하게 명시해주는 것이 좋음

function addNum(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);

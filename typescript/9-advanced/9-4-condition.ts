type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; // string을 상속했기때문에 Type의 type은 boolean

// typeScript 공식문서 예제
type TypeName<T> = T extends string
  ? "string" // string을 상속하면 string
  : T extends number
  ? "number" // number 상속하면 number
  : T extends boolean
  ? "boolean" // boolean 상속하면 boolean
  : T extends undefined
  ? "undefined" // undefined 상속하면 undefined
  : T extends Function
  ? "function" // function 상속하면 function
  : "object";

type T0 = TypeName<string>; // T0의 타입은 "string"
type T1 = TypeName<"abc">; // T1의 타입은 "string"
type T2 = TypeName<() => {}>; // T2의 타입은 "function"

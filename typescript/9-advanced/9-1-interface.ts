type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object : Type 과 Interface 둘 다 구현 가능
const objA: PositionType = {
  x: 1,
  y: 1,
};

const objB: PositionInterface = {
  x: 1,
  y: 1,
  z: 1, // 같은 PositionInterface 이름으로 z를 추가해주었으니 z도 값을 적어주어야 함
};

// class : Type 과 Interface 둘 다 구현 가능
class PosA implements PositionType {
  x: number;
  y: number;
}

class PosB implements PositionInterface {
  x: number;
  y: number;
  z: number; // 같은 PositionInterface 이름으로 z를 추가해주었으니 z도 값을 적어주어야 함
}

// extends
type ZPositionType = PositionType & { z: number }; // type 상속하는 방법

interface ZPositionInterface extends PositionInterface {
  z: number;
} // interface 상속하는 방법

// Only interfaces can be merged (review 1 내용과 같음)
interface PositionInterface {
  z: number;
}

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; // Name의 타입은 Person의 name의 타입과 같음. 즉, string
type NumberType = number; // 새로운 타입 만드는 방법
type Direction = "left" | "right";

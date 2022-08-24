{
  const obj = {
    name: "zuitopia",
  };

  obj.name; // zuitopia
  obj["name"]; // zuitopia

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // Name의 타입은 string이 됨
  const text: Name = "hello"; // string 타입이기 때문에 문자열만 넣을 수 있음

  type Gender = Animal["gender"]; // Gender의 타입은 "male" | "female" 이 됨

  type Keys = keyof Animal; // "name" | "age" | "gender" 세 가지의 union 타입으로 지정
  const key: Keys = "gender"; // name, age, gender 세 개 중에만 선택 가능

  // 별로 쓸모있지는 않지만,, 그래도 활용 예시
  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "zuitopia",
    gender: "female",
  };
}

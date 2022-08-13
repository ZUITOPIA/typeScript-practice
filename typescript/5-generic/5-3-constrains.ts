interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log("full time");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log("part time");
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 리턴하는 함수는 개똥개똥개똥벌레
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
ellie.workFullTime();
const bob = new PartTimeEmployee();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: "zuitopia",
  age: 23,
};

console.log(getValue(obj, "name")); // zuitopia
console.log(getValue(obj, "age")); // 23
// console.log(getValue(obj, "animal")); // 없는 key 정의하면 에러

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

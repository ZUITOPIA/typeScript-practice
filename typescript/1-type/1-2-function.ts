{
  // JavaScript 똥
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript 굳
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 똥
  function jsFetchNum(id) {
    // code ..
    // code ..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript 굳
  function fetchNum(id: string): Promise<number> {
    // code ..
    // code ..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript => TypeScript
  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Steve");

  // Default Parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage(); // default message 출력

  // Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
}

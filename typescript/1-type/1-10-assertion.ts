{
  /**
   * Type Assertions 사용하는 것이 좋지는 않음
   * 그러나 JavaScript 와 TypeScript 을 연동할 때에 불가피하게 사용하기는 함
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length); // result가 string일 것이라고 장담할 때 사용
  console.log((<string>result).length); // 위와 같은 코드

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 장담하지 않았는데 사용했을 경우 에러발생

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers.push(2); 에러 밑줄 발생
  // 이유? numbers 는 number[]일 수도 있지만 undefinded일 수도 있기 때문에
}

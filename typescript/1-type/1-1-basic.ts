{
  /**
   * JavaScript
   * Primitive : number, string, boolean, bigint, symbol, null, undefined
   * Object : function, array ...
   */

  // number
  const num: number = -1.2;

  // string
  const str: string = "hello";

  // undefined : 알 수 없음
  let age: number | undefined; // 데이터 타입이 있거나, 결정되지 않았거나
  function find(): number | undefined {
    return undefined;
  }

  // null : 값이 없음
  let person: string | null; // 데이터 타입이 있거나, 없거나

  // unknown 쓰지 마
  let notSure: unknown = 0;
  // any 쓰지 마
  let anything: any = 0;

  // void
  function print(): void {
    console.log("hello");
    return; // 아무것도 리턴하지 않음
  }

  let unusable: void = undefined; // 이렇게 안 씀 !!

  // never : 아무것도 return 할 수 없음 (에러를 날릴 때, 혹은 끝나지 않는 코드에서만)
  function throwError(message: string): never {
    // message -> server (log)
    // 발생한 에러 메세지를 서버로 보내서 로그로 남김
    throw new Error(message);
  }

  // object 쓰지마
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "cat" });
}

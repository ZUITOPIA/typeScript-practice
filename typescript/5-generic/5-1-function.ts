// generic 사용 > 재사용성 높임

{
  function checkNotNull<T>(arg: T | null): T {
    // generic function
    // T or null 타입을 받고, 다시 T를 return
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
}

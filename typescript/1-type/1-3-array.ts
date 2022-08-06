{
  // Array
  const fruits: string[] = ["사과", "바나나"];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    // readonly 가 붙은 배열은 추가, 수정 모두 불가능
    // fruits.push 하려고 하면 에러발생
    // 주의 , readonly 사용할 때 Array<string>은 아직 허용하지 않음
  }

  // Tuple -> interface, type alias, class 로 대체해서 사용 !!!
  let student: [string, number];
  student = ["이름", 123];
  student[0]; // 이름
  student[1]; // 123
  const [name, age] = student;
}

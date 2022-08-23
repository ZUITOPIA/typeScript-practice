{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  // 배열에서의 map 함수
  // [1, 2].map(item => item * item); // [1, 4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for .. in 과 같은 느낌
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "hello world", // 모든 정보가 optional 이기 때문에 있어도 되고 없어도 됨
    // 대신 Video에 들어있는 정보 (title, author,description) 가 아닌 다른 정보는 추가할 수 없음!!!
  };

  // Map type : 재사용성 높임 (제네릭과 비슷함)
  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "바보",
    age: 100,
  };

  // readonly
  type ReadOnly<T> = {
    readonly [P in keyof T]?: T[P]; // readonly 는 추후에 성질 변경 불가능
  };
}

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

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
    description: null, // title, author, description 중 하나라도 빼먹으면 missing property 에러생김!
  };

  // typeScript 문서 예제
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>; // 한 단계 감싸는 역할... 무슨 말인지 이해 못 했다 ^>^?
  };

  // 돌아와..??
}

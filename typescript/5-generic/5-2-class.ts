import { number } from "prop-types";
import { ThemeConsumer } from "styled-components";

// either : a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}
const either: Either<number, number> = new SimpleEither(3, 4);
// 3,4 를 넣어주었기때문에 <L,R> 이 <number, number> 로 지정된 것
either.left(); // 3
either.right(); // 4
const best: Either<object, string> = new SimpleEither(
  { name: "zuitopia" },
  "hello"
);
// { name: "zuitopia" }, "hello" 를 넣어주었기때문에 <L,R> 이 <object, string>로 지정된 것

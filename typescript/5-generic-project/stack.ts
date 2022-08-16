interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0; // 내부에서만 쓰이는 변수는 _ 붙여서 나타냄
  private head?: StackNode<T>;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: T): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is full");
    }
    const node: StackNode<T> = { value, next: this.head };
    // const node = { value, next: this.head }; 타입추론도 가능
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is empty");
    }
    // head == undefined 이라면 head가 null임에도 불구하고 다음 코드로 넘어감
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stackA = new StackImpl<string>(10); // unknown 대신 string 지정하면

stackA.push("zu 1"); // string
stackA.push("zuitopia 2"); // string

const stackB = new StackImpl<number>(10); // unknown 대신 number 지정하면
stackB.push(123); // number

while (stackA.size != 0) {
  console.log(stackA.pop());
}

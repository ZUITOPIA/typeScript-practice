interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0; // 내부에서만 쓰이는 변수는 _ 붙여서 나타냄
  private head?: StackNode;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: string): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is full");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
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

const stack = new StackImpl(10);
stack.push("zu 1");
stack.push("zuitopia 2");
stack.push("boba 3");
while (stack.size != 0) {
  console.log(stack.pop());
}

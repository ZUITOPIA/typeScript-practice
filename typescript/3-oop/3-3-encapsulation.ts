{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public : 일반적인 경우
  // private : 외부에서 읽기, 접근 X
  // protected : 외부에서 접근 X 그러나 해당 class 를 상속한 다른 class 내에서는 접근 O
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeansGram: number = 0; // instance (object) level

    private constructor(coffeBeansGram: number) {
      this.coffeeBeansGram = coffeBeansGram;
    }

    static makeMachine(coffeBeansGram: number): CoffeeMaker {
      return new CoffeeMaker(coffeBeansGram);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeansGram += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeansGram < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans ..");
      }
      this.coffeeBeansGram -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(25);
  maker.fillCoffeeBeans(10);
  console.log(maker); // CoffeeMaker { coffeeBeansGram: 35 } 출력

  // 유용한 Getter와 Setter
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 10;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName); // Steve Jobs 출력
  user.age = 5;
  console.log(user.age); // 5 출력
}

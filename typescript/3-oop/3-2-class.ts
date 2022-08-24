{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeansGram: number = 0; // instance (object) level

    constructor(coffeBeansGram: number) {
      this.coffeeBeansGram = coffeBeansGram;
    } // 방법 1

    static makeMachine(coffeBeansGram: number): CoffeeMaker {
      return new CoffeeMaker(coffeBeansGram);
    } // 방법 2

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeansGram < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans ..");
      }
      this.coffeeBeansGram -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots, // shots: shots 으로 key와 value가 같을 때
        hasMilk: false,
      };
    }
  }

  const makerA = new CoffeeMaker(20);
  console.log(makerA); // CoffeeMaker { coffeeBeansGram: 20 } 출력
  const makerB = new CoffeeMaker(30);
  console.log(makerB); // CoffeeMaker { coffeeBeansGram: 30 } 출력

  // 만약, 고정된 값인 BEANS_GRAM_PER_SHOT을 class level로 지정해주지 않았다면 ?
  // CoffeeMaker { BEANS_GRAM_PER_SHOT: 7, coffeeBeansGram: 20 } 출력
  // CoffeeMaker { BEANS_GRAM_PER_SHOT: 7, coffeeBeansGram: 30 } 출력
  // 중복적인 데이터 생성으로 메모리 낭비 -> static 키워드를 붙임으로써 class level로 지정!
  const makerC = CoffeeMaker.makeMachine(40);
  console.log(makerC); // CoffeeMaker { coffeeBeansGram: 40 } 출력
}

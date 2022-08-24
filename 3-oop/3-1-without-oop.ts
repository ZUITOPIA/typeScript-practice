{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7;
  let coffeeBeansGram: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeansGram < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("Not enough coffee beans ..");
    }
    coffeeBeansGram -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots, // shots: shots 으로 key와 value가 같을 때
      hasMilk: false,
    };
  }
  coffeeBeansGram += 10 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}

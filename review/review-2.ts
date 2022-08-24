// interface 를 쓰는 경우
// 인터페이스 : 다양한 클래스에서 사용될 공통기능들을 미리 구현해놓은 틀 같은 느낌?
// 어떠한 기능 구현이 필요할 때 사용 !!

interface CoffeeMaker = {
    coffeeBeans: number;
    makeCoffee: (shots: number) => Coffee;
} 

class CoffeeMachine implements CoffeeMaker{
    coffeeBeans: number;
    makeCoffee(shots: number){
        return {};
    }
}

// type 을 쓰는 경우
// 기능 구현 보다는 데이터를 담아놓고 싶을 때 사용 !!

type Position {
    x: number;
    y: number;
};

const pos: Position = {
    x: 0, y: 0
};
printPosition(pos);

// 위 예제들은 이전 파일들에서 부분만 긁어온 것으로 에러 존재함
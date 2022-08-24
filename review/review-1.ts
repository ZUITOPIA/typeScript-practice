// type vs interface
// interface에서 할 수 있는 대부분의 기능들은 type에서도 가능
// 그 러 나
// type은 속성을 추가하려면 다른 이름으로 선언해야하는 불편함이 있는 반면
// interface는 같은 이름으로 선언적 확장이 가능

interface Animal {
  weight: number;
}

interface Animal {
  height: number;
}

const cat: Animal = {
  weight: 5,
  height: 40,
};

console.log(cat);

type _Animal = {
  weight: number;
}; // error : 식별자 중복

type _Animal = {
  height: number;
}; // error : 식별자 중복

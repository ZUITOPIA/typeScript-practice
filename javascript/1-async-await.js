// control + option + n

// async & await
// clear style of using promise !!

// 1. async
async function fetchUser() {
  // do network request in 10 secs ...
  return "zuitopia";
}

const user = fetchUser();
user.then(console.log); // zuitopia 출력
console.log(user); // Promise { 'zuitopia' } 출력

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
} // 기존 Promise로 delay 함수 만드는 법

async function getApple() {
  await delay(2000);
  return "사과";
}

async function getBanana() {
  await delay(3000);
  return "바나나";
}

{
  /** 만약, Promise로 3초 뒤 바나나 얻기 코드를 짜본다면?

function getBananaPromise() {
  return delay(3000).then(() => "바나나");
}

*/
}

{
  /** 만약, Promise로 사과와 바나나를 더해주는 코드를 짜본다면 ? 
    콜백지옥이 떠오른다 -> async,await 사용하자
    
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

*/
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
  // return apple + banana; // 5초 뒤, 사과바나나 출력
}

pickFruits().then(console.log); // 5초 뒤, '사과 + 바나나' 출력

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log); // 5초 뒤, '사과 + 바나나' 출력

function PickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
PickOnlyOne().then(console.log); // 2초 뒤, '사과' 출력

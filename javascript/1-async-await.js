// control + option + n

// async & await
// clear style of using promise !!

// promise
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs ...

    resolve("zuitopia");
    // [[PromiseState]] : "fulfilled"
    // [[PromiseResult]] : "zuitopia"

    // Promise는 꼭 resolve, reject 중 하나를 이용하여 완료해야함!
    // 만약, { return "zuitopia"; }으로 완료할 시 Promise{<pending>} 상태가 지속됨

    // PromiseState : pending | fulfulled | rejected
  });
}

const user = fetchUser();
user.then(console.log); // zuitopia 출력
console.log(user); // Promise { 'zuitopia' } 출력

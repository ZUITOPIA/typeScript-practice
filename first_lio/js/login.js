const enterLogin = document.querySelector("#enterLogin");
const logInput = document.querySelector("#enterLogin input");
const orderSay = document.querySelector("#order");
const link_next = document.querySelector("#link_next");

const HIDDEN = "hidden";
const ALREADY_USER = "username";

function hideAndSeek(event){
    event.preventDefault(); 
    enterLogin.classList.add(HIDDEN);
    whatName.classList.add(HIDDEN);
    link_next.classList.remove(HIDDEN);
    const username = logInput.value;
    localStorage.setItem(ALREADY_USER, username); 
    paintOrderSay(username);
}

function paintOrderSay(username) {
    orderSay.innerText = `Make ${username}'s To Do list!`;
    orderSay.classList.remove(HIDDEN);
}

const alreadyExist = localStorage.getItem(ALREADY_USER);

if (alreadyExist === null){
    enterLogin.classList.remove(HIDDEN);
    whatName.classList.remove(HIDDEN);
    link_next.classList.add(HIDDEN);
    enterLogin.addEventListener("submit", hideAndSeek);
} else {
    paintOrderSay(alreadyExist);
    link_next.classList.remove(HIDDEN);
}

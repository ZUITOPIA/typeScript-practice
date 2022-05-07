const time = document.querySelector("h3#time");

function whatTime() {
    const date = new Date();

    const dayArray = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const getToday = dayArray[date.getDay()];

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
   
    time.innerText = `${getToday}, ${hours} : ${minutes} : ${seconds}`;
}

whatTime();
setInterval(whatTime, 1000);


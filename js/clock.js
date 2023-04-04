const clock = document.querySelector("#clock span:last-child");
const today = document.querySelector("#clock span:first-child");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${Seconds}`;
}

getClock();
setInterval(getClock, 1000);

function getDay() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  today.innerText = `${year}.${month + 1}.${day}`;
  console.log(month);
}

getDay();

let finalDate = new Date(`05-06-${new Date().getFullYear() + 1}`);

const daysLeftBox = document.querySelector(".days-left");
const hoursLeftBox = document.querySelector(".hours-left");
const minutesLeftBox = document.querySelector(".minutes-left");
const secondsLeftBox = document.querySelector(".seconds-left");

function countDown() {
  setInterval(() => {
    let currentDate = new Date().getTime();

    let duration = finalDate.getTime() - currentDate;

    const days = Math.floor(duration / 1000 / 60 / 60 / 24);
    const hours = Math.floor((duration / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((duration / 1000 / 60) % 60);
    const seconds = Math.floor((duration / 1000) % 60);

    daysLeftBox.innerText = `${days}`;
    hoursLeftBox.innerText = `${hours}`;
    minutesLeftBox.innerText = `${minutes}`;
    secondsLeftBox.innerText = `${seconds}`;
  }, 1000);
}

countDown();

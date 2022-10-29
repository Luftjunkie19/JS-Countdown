const container = document.querySelector(".container");

const dates = [
  new Date(`05-06-${new Date().getFullYear() + 1} 05:30:37`),
  new Date(`10-01-${new Date().getFullYear() + 1} 06:00:00`),
  new Date(`12-31-${new Date().getFullYear() + 1} 23:59:59`),
];

const names = [
  "Luftie's Birthday",
  "First step to become a Programmer",
  "New year",
];

function countDown() {
  names.forEach((name) => {
    const div = document.createElement("div");
    div.classList.add("date");
    div.innerHTML = `
    <h1 class="date-name">${name}</h1>
    
    <div class="date-time">
      <div class="div">
        <h3>Days</h3>
        <p class="days-left"></p>
      </div>

      <div class="div">
        <h3>Hours</h3>
        <p class="hours-left"></p>
      </div>

      <div class="div">
        <h3>Minutes</h3>
        <p class="minutes-left"></p>
      </div>

      <div class="div">
        <h3>Seconds</h3>
        <p class="seconds-left"></p>
      </div>
    </div>`;
    container.append(div);
  });

  const daysBoxes = document.querySelectorAll(".days-left");
  const hoursBoxes = document.querySelectorAll(".hours-left");
  const minutesBoxes = document.querySelectorAll(".minutes-left");
  const secondsBoxes = document.querySelectorAll(".seconds-left");

  dates.forEach((date, i) => {
    setInterval(() => {
      let currentDate = new Date().getTime();

      let duration = date.getTime() - currentDate;

      const days = Math.floor(duration / 1000 / 60 / 60 / 24);
      const hours = Math.floor((duration / 1000 / 60 / 60) % 24);
      const minutes = Math.floor((duration / 1000 / 60) % 60);
      const seconds = Math.floor((duration / 1000) % 60);

      daysBoxes[i].innerText = `${days}`;
      hoursBoxes[i].innerText = `${hours}`;
      minutesBoxes[i].innerText = `${minutes}`;
      secondsBoxes[i].innerText = `${seconds}`;
    }, 1000);
  });
}

countDown();

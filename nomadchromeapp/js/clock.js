const clock = document.getElementById("clock");

function padZero(number) {
  return String(number).padStart(2, "0");
}
function currentTimeString() {
  const date = new Date();
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());
  return `${hour}:${minute}`;
}
function updateClock() {
  clock.innerText = currentTimeString();
}
updateClock();
setInterval(updateClock, 1000);

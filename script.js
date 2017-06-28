
var now = new Date();
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = document.getElementById("day");
var time = document.getElementById("time");
var theDay = weekDays[now.getDay()];


function setTime() {
  var now = new Date();
  var clock = padZeros(now.getHours()) + ":" + padZeros(now.getMinutes()) + ":" + padZeros(now.getSeconds());
  time.innerHTML = clock;

}

function padZeros(num) {
  if (num <10) {
  return "0" +num;
}
return num;
}

day.innerHTML= theDay;
setTime();
setInterval(setTime, 1000);

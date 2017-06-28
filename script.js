
var now = new Date();
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = document.getElementById("day");
var time = document.getElementById("time");
var theDay = weekDays[now.getDay()];


function setTime() {
  var now = new Date();
  var clock = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  time.innerHTML = clock;

}

day.innerHTML= theDay;
setTime();
setInterval(setTime, 1000);

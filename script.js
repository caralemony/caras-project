var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = document.getElementById("day");
var time = document.getElementById("time");



function setTime() {
  var now = new Date();
  var theDay = weekDays[now.getDay()];
  var clock = padZeros(now.getHours()) + ":" + padZeros(now.getMinutes()) + ":" + padZeros(now.getSeconds());
  time.innerHTML = clock;
  day.innerHTML= theDay;

}

function padZeros(num) {
  if (num <10) {
  return "0" +num;
}
return num;
}


setTime();
setInterval(setTime, 1000);

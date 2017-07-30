var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = document.getElementById("day");

function setTime() {
  var now = new Date();
  var theDay = weekDays[now.getDay()];
  day.innerHTML= theDay;

}

setTime();

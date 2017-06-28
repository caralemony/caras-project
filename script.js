
var now = new Date();
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = document.getElementById("day");
var theDay = weekDays[now.getDay()];
day.innerHTML= theDay;

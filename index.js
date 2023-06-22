function updateClock() {
  var now = new Date();
  console.log(now)
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var time = "Time : "+ hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").textContent = time;
}

setInterval(updateClock,1000);
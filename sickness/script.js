function virusClicked() {
  if (localStorage.points) {
    localStorage.points = Number(localStorage.points) + 1;
  } else {
    localStorage.points = 0;
  }
  document.getElementById("points").innerHTML = localStorage.points;
}



setInterval(function() {
  if (localStorage.income) {
  var tempPs = Number(localStorage.income);
  localStorage.points = Number(localStorage.points) + (tempPS / 50);
  } else {
    localStorage.income = 1;
  }
  document.getElementById("points").innerHTML = Math.round(localStorage.points);
}, 20}

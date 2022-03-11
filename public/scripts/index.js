let date = new Date();
let weekday = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
// let day = weekday[date.getDay()];

let day0 = document.querySelector('#day0');
let day1 = document.querySelector('#day1');
let day2 = document.querySelector('#day2');
let day3 = document.querySelector('#day3');
let day4 = document.querySelector('#day4');
let day5 = document.querySelector('#day5');
let day6 = document.querySelector('#day6');
let day7 = document.querySelector('#day7');

first();

function first() {
  let n = 0;
  let canChange = false;
  for (let i = 0; i < 8; i++) {
    if (weekday[date.getDay() + (i + 1)]) {
      // window['day' + i].innerHTML = weekday[date.getDay() + (i + 1)];
      // eval("day+i.innerHTML = weekday[date.getDay() + (i+1)]");
      // eval("let day" + i + "=document.querySelector('#day" + i + "')");
      let toDay = eval("day" + i);
      toDay.innerHTML = weekday[date.getDay() + (i + 1)];
      console.log("nextWeek");
    } else {
      n = i;
      i = 9;
      canChange = true;
    }
  }
  if (canChange == true) {
    nextWeek(n);
  }
}

function nextWeek(n) {
  let nw = 0;
  for (n; n < 8; n++) {
    // window['day' + n].innerHTML = weekday[nw];
    let toNextW = eval("day" + n);
    toNextW.innerHTML = weekday[nw];
    nw++;
  }
}


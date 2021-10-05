let setDay = false;
let setMonth = false;
let setYear = false;

let bday, bmonth, byear;

function getDay() {
  var index = document.getElementById("day").options.selectedIndex;
  var val= document.getElementById("day").options[index].value;
  bday = val;

  setDay = true;
}

function getMonth() {
  var index = document.getElementById("month").options.selectedIndex;
  var val= document.getElementById("month").options[index].value;
  bmonth = val;

  setMonth = true;
}

function getYear(value) {
  var index = document.getElementById("year").options.selectedIndex;
  var val= document.getElementById("year").options[index].value;
  byear = val;

  setYear = true;
}

function nextQuestion() {
  let daySelect = document.getElementById('day')
  let monthSelect = document.getElementById('month')
  let yearSelect = document.getElementById('year')
  let button = document.getElementById('next')

  if (!setDay || !setMonth || !setYear) {
    daySelect.style = 'border: 1px solid red'
    monthSelect.style = 'border: 1px solid red'
    yearSelect.style = 'border: 1px solid red'
  }

  if (setDay) {
    daySelect.style = 'border: none'
  }

  if (setMonth) {
    monthSelect.style = 'border: none'
  }

  if (setYear) {
    yearSelect.style = 'border: none'
  }

  if (setDay && setMonth && setYear) {
    button.setAttribute('type', 'submit')
  }

  ageCalc(bday, bmonth, byear)
}

function ageCalc(day, month, year) {
  let age = 0;
  if (year <= 2003) {
    age = 18;
  }
  if (year <= 1985) {
    age = 36
  }
  if (year <= 1975) {
    age = 46
  }
}

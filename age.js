const birthDate = document.getElementById("date");
const calculateBtn = document.getElementById("calculate");
const actualAge = document.getElementById("totalAge");

function ageCalculator() {
  const currentYear = new Date();
  const dateValue = birthDate.value;
  const birthDayDate = new Date(dateValue);
  let currentAge = currentYear.getFullYear() - birthDayDate.getFullYear();
  let month = currentYear.getMonth() - birthDayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentYear.getDate() < birthDayDate.getDate())
  ) {
    currentAge--;
  }
  if ((birthDate.Value = "")) {
    actualAge.innerText = `Please enter your birth date to calculate your age`;
  } else {
    actualAge.innerText = `Your current age is ${currentAge} ${
      currentAge > 1 ? "years" : "year"
    } old`;
  }
  return currentAge;
}

calculateBtn.addEventListener("click", ageCalculator);

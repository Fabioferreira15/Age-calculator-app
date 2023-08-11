
const btn = document.getElementById("btn");
const yearsElement = document.querySelector(".anos h2");
const monthsElement = document.querySelector(".meses h2");
const daysElement = document.querySelector(".dias h2");

//Calculate age in years months and days
btn.addEventListener("click", function (event) {
  event.preventDefault();

  const year = parseInt(document.querySelector("#year").value);
  const month = parseInt(document.querySelector("#month").value);
  const day = parseInt(document.querySelector("#day").value);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let ageMilliseconds = today - birthDate;
  let ageDate = new Date(ageMilliseconds);

  let ageYear = ageDate.getUTCFullYear() - 1970;

  let ageMonth = ageDate.getUTCMonth();
  let ageDay = ageDate.getUTCDate() - 1;

  yearsElement.textContent = ageYear;
  monthsElement.textContent = ageMonth;
  daysElement.textContent = ageDay;
});

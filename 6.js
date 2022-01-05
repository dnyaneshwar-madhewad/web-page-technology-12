<<<<<<< HEAD
async function weatherReport() {
  const city = document.querySelector("#input").value;
  const appid = "7023923dd26a725da995c75b65864de5";
  const unit = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${unit}`;

  const response = await fetch(url);
  const result = await response.json();

  console.log(result.main.temp);

  const parent = document.querySelector("#parent");
  const childs = parent.innerHTML;
  const newchild = `<h1>${city} ${result.main.temp}</h1>`;

  parent.innerHTML = newchild + childs;
=======
function increment(param1) {
  let h1 = param1.parentElement.children[0];
  let prevVal = h1.innerHTML;

  let newVal = parseInt(prevVal) + 1;
  h1.innerHTML = newVal;
}

function decrement(param1) {
  let h1 = param1.parentElement.children[0];
  let prevVal = h1.innerHTML;

  let newVal = parseInt(prevVal) - 1;
  h1.innerHTML = newVal;
>>>>>>> bd2c0d65c0c04cbd7bb503a8a4fb52a99e85a964
}

<<<<<<< HEAD
// window.onload = () => getAllMessages();

async function getAllMessages() {
  const inputValue = document.querySelector("#input").value;
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=${inputValue}`;

  const res = await fetch(url);
  const result = await res.json();

  for (let item of result) {
    const parent = document.querySelector("#parent");

    const childs = parent.innerHTML;
    const newChild = `<p>${item.title}</p>`;

    parent.innerHTML = newChild + childs;
  }
=======
function increment(param1) {
  let h1 = document.querySelector("#" + param1);
  let prevValue = h1.innerHTML;

  let newValue = parseInt(prevValue) + 1;

  h1.innerHTML = newValue;
}

function decrement(param1) {
  let h1 = document.querySelector("#" + param1);
  let prevValue = h1.innerHTML;

  let newValue = parseInt(prevValue) - 1;

  h1.innerHTML = newValue;
>>>>>>> bd2c0d65c0c04cbd7bb503a8a4fb52a99e85a964
}

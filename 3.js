<<<<<<< HEAD
async function callBackendApi() {
  // Ajax Logic :: HTTP, AJAX, JSON
  const url = `https://jsonplaceholder.typicode.com/posts`;

  const res = await fetch(url);
  const list = await res.json();
  console.log(list);

  const parent = document.querySelector("#parent");
  for (let item of list) {
    const prevChilds = parent.innerHTML;
    const newChild = `<p>${item.id} ${item.body}</p>`;
    parent.innerHTML = newChild + prevChilds;
  }
=======
function increment() {
  let h1 = document.querySelector("#id1");
  let prevValueStr = h1.innerHTML;

  let newValue = 0;
  let prevValue = parseInt(prevValueStr);
  if (prevValue == NaN) {
    // do nothing
  } else {
    newValue = prevValue + 1;
  }

  h1.innerHTML = newValue;
}

function decrement() {
  let h1 = document.querySelector("#id1");
  let prevValueStr = h1.innerHTML;

  let newValue = 0;
  let prevValue = parseInt(prevValueStr);
  if (prevValue == NaN) {
    // do nothing
  } else {
    newValue = prevValue - 1;
  }

  h1.innerHTML = newValue;
>>>>>>> bd2c0d65c0c04cbd7bb503a8a4fb52a99e85a964
}

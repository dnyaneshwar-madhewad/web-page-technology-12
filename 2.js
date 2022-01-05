<<<<<<< HEAD
async function callBackendApi() {
  // Ajax Logic :: HTTP, AJAX, JSON
  const url = `https://jsonplaceholder.typicode.com/posts`;

  const res = await fetch(url);
  const list = await res.json();

  console.log(list);
=======
function increment() {
  let h1 = document.querySelector("#id1");
  let prevValue = h1.innerHTML;

  let newValue = parseInt(prevValue) + 1;

  h1.innerHTML = newValue;
}

function decrement() {
  let h1 = document.querySelector("#id1");
  let prevValue = h1.innerHTML;

  let newValue = parseInt(prevValue) - 1;

  h1.innerHTML = newValue;
>>>>>>> bd2c0d65c0c04cbd7bb503a8a4fb52a99e85a964
}

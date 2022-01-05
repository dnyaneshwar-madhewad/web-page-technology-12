<<<<<<< HEAD
function callBackendApi() {
  // Ajax Logic
  const url = `https://jsonplaceholder.typicode.com/posts`;

  // AJAX  Intermediate
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
=======
let counter = 0;

function increment() {
  let h1 = document.querySelector("#id1");
  h1.innerHTML = counter++;
}

function decrement() {
  let h1 = document.querySelector("#id1");
  h1.innerHTML = counter--;
>>>>>>> bd2c0d65c0c04cbd7bb503a8a4fb52a99e85a964
}

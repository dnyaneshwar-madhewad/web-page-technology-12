function tweet() {
  let parent = document.querySelector("#parent");

  let prevChilds = parent.innerHTML;

  let tweetVal = document.querySelector("#tweetBox").value;

  let newChild = `<div class="col-12 p-1">
    <div class="alert alert-primary">
        ${tweetVal}

      <div class="mt-2">
        <span onclick="like(this)" style="cursor: pointer"
          >&#128077;</span
        >
        <span>0</span>

        <span class="ms-2" onclick="dislike(this)" style="cursor: pointer"
          >&#128078;</span
        >
        <span>0</span>
      </div>
    </div>
  </div>`;

  parent.innerHTML = newChild + prevChilds;

  document.querySelector("#tweetBox").value = "";
}

function like(param1) {
  let span = param1.parentElement.children[1];

  let prevValue = span.innerHTML;
  let newValue = parseInt(prevValue) + 1;

  span.innerHTML = newValue;
}

function dislike(param1) {
  let span = param1.parentElement.children[3];

  let prevValue = span.innerHTML;
  let newValue = parseInt(prevValue) + 1;

  span.innerHTML = newValue;
}

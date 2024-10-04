const listcontainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
  if (inputBox.value === "") {
    alert("Add a Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.append(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
    saveData();
  }
  inputBox.value = "";
}

listcontainer.addEventListener(
  "click",
  (event) => {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showData() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showData();

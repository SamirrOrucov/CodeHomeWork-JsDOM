const addList = document.getElementById("new-task");
const btn = document.querySelector(".addBtn");
const ul = document.getElementById("incomplete-tasks");
// const del=document.querySelector(".delete")

document.body.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    btn.click();
  }
});

btn.addEventListener("click", function () {
  const list = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("check");
  const label = document.createElement("label");
  const del = document.createElement("button");
  del.textContent = "Delete";
  del.classList.add("delete");
  list.append(checkbox, label, del);
  label.textContent = addList.value;
  ul.appendChild(list);
  const arr=JSON.parse(localStorage.getItem("todoo"))||[]
  arr.push(addList.value)
  localStorage.setItem("todoo",JSON.stringify(arr))
  console.log(arr);
  addList.value = "";
  del.onclick = () => list.remove();
});


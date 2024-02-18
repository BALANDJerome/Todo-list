const input = document.querySelector("input");
const todoList = document.querySelector(".todo-list");

let save = () => { localStorage.setItem("todo", todoList.innerHTML) }
let reload = () => {
  if (localStorage.length > 0)
    todoList.innerHTML = localStorage.getItem("todo")
}
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value.length > 0) {
    todoList.innerHTML += `<li id="list">${input.value}</li>`;
    save()
    input.value = "";
  } else if (e.key === "Enter" && input.value.length === 0) {
    alert("Aucun caractères saisis")
  }
});
todoList.addEventListener("click", (e) => {
  if (e.target.style.color === "") {
    e.target.innerHTML += ` <span class="finish">(terminé)</span>`;
    e.target.style.color = "grey";
    save()
  } else {
    e.target.remove()
    save()
  }
})
reload()
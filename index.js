const input = document.querySelector("input");
const list = document.querySelector("ul");

let save = () => {
  localStorage.setItem("todo", list.innerHTML);
};
let reload = () => {
  if (localStorage.todo) list.innerHTML = localStorage.getItem("todo");
  else {
    list.innerHTML = "";
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${input.value}</li>`;
  save();
  input.value = "";
});
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  save();
});
reload();

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
  list.innerHTML += `<li id="list">${input.value}</li>`;
  save();
  input.value = "";
});
list.addEventListener("click", (e) => {
  if (e.target.style.color === "") {
    e.target.innerHTML += ` <span class="finish">(terminé)</span>`;
    e.target.style.color = "grey";
  } else {
    e.target.remove();
  }
  save();
});
reload();

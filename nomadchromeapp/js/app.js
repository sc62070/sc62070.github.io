/* Constant */

const nameContainer = document.getElementById("name-container");
const nameInput = document.querySelector("#name-container input");
const greeting = document.getElementById("greeting");
const toDoContainer = document.getElementById("todo-container");
const toDoInput = document.querySelector("#todo-container input");
const toDoList = document.getElementById("todo-list");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "name";
const TODO_KEY = "todo";

/* Variable */

let isLogin = false;
let toDos = [];

/* Storage */

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

/* Name */

function showNameInput(show) {
  if (show) {
    nameContainer.classList.remove(HIDDEN_CLASS_NAME);
  } else {
    nameContainer.classList.add(HIDDEN_CLASS_NAME);
  }
}

/* Greeting */

function showGreeting(name) {
  const date = new Date();
  const hour = date.getHours();

  if (hour < 6) {
    greeting.innerText = `Good night, ${name}.`;
  } else if (hour < 12) {
    greeting.innerText = `Good morning, ${name}.`;
  } else if (hour < 18) {
    greeting.innerText = `Good afternoon, ${name}.`;
  } else {
    greeting.innerText = `Good evening, ${name}.`;
  }

  greeting.classList.remove(HIDDEN_CLASS_NAME);
}

/* To do */

function showToDoList() {
  toDoContainer.classList.remove(HIDDEN_CLASS_NAME);
}

function loadToDos() {
  const savedToDo = localStorage.getItem(TODO_KEY);
  if (savedToDo) {
    const parsedToDo = JSON.parse(savedToDo);
    parsedToDo.forEach((todo) => {
      addToDo(todo);
    });
    toDos = parsedToDo;
  }
}

function updateDone(id) {
  const index = toDos.findIndex((element) => {
    return element.id === id;
  });
  const isDone = toDos[index].isDone;
  toDos[index].isDone = !isDone;
  saveToDos();
}

function addToDo(todo) {
  toDos.push(todo);
  saveToDos();

  const TODO_ITEM_TEXT_DONE_CLASSNAME = "todo-item__text--done";

  const li = document.createElement("li");
  li.id = todo.id;
  li.className = "todo-item";

  const button = document.createElement("button");
  button.className = "todo-item__checkbox";
  button.innerText = todo.isDone ? "✓" : "";
  button.addEventListener("click", (event) => {
    const li = event.target.parentNode;
    updateDone(parseInt(li.id));

    button.innerText = todo.isDone ? "✓" : "";

    const h3 = li.childNodes[1];
    h3.classList.toggle(TODO_ITEM_TEXT_DONE_CLASSNAME);
  });
  li.appendChild(button);

  const h3 = document.createElement("h3");
  h3.innerText = todo.text;
  if (todo.isDone) {
    h3.classList.add(TODO_ITEM_TEXT_DONE_CLASSNAME);
  }
  li.appendChild(h3);

  toDoList.appendChild(li);
}

/* main */

const username = localStorage.getItem(USERNAME_KEY);
if (username === null) {
  showNameInput(true);
} else {
  showGreeting(username);
  showToDoList();
  isLogin = true;
  loadToDos();
}

function login() {
  const username = nameInput.value;
  if (username === "") {
    return;
  }

  nameInput.value = "";
  showNameInput(false);
  nameContainer.addEventListener("transitionend", () => {
    showGreeting(username);
    setInterval(showToDoList, 500);
    localStorage.setItem(USERNAME_KEY, username);
    isLogin = true;
  });
}

document.addEventListener("keypress", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  if (isLogin) {
    const newToDo = {
      id: Date.now(),
      text: toDoInput.value,
      isDone: false,
    };
    addToDo(newToDo);
    toDoInput.value = "";
  } else {
    login();
  }
});

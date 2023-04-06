const $btn = document.querySelector("#addtodo");
const $input = document.querySelector("#inputfield");
const $todoList = document.querySelector("#todo-lists");

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo() {
  $todoList.innerHTML = "";

  const $template = document.createElement("template");
  $template.innerHTML = `
  <li>
  <span></span>
  <div>
  <input type="checkbox" />
  <i class="fa-solid fa-trash"></i>
  </div>
  </li>
  `;

  toDos.forEach((todo) => {
    const $item = $template.content.cloneNode(true);
    const $text = $item.querySelector("span");
    const $trash = $item.querySelector(".fa-trash");

    $text.innerText = todo;
    $trash.addEventListener("click", (event) => {
      const index = toDos.indexOf(todo);
      toDos.splice(index, 1);
      paintToDo();
      saveToDos();
    });

    $todoList.appendChild($item);
  });
}

function toDoSubmit(event) {
  if (!canSaveTodo($input.value)) {
    $input.focus();
    return;
  }

  event.preventDefault();
  toDos.push($input.value);
  $input.value = "";
  paintToDo();
  saveToDos();
}

$btn.addEventListener("click", toDoSubmit);

function canSaveTodo(todo) {
  if (todo.trim() === "") {
    alert("할 일을 입력한 후에 등록해 주세요.");
    return false;
  }

  if (toDos.includes(todo)) {
    alert("이미 등록되어 있습니다.");
    return false;
  }

  return true;
}

const savedToDos = localStorage.getItem("todos");
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

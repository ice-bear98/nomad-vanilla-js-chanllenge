const $loginId = document.querySelector("#login");
const $loginPassword = document.querySelector("#password");

const $createId = document.querySelector("#create-id");
const $createPassword = document.querySelector("#create-password");

const $login = document.querySelector("#submit-login");
const $create = document.querySelector("#submit-create");
const $loginPage = document.querySelector(".login-container");
const $todoPage = document.querySelector(".todo-container");
const $cleaner = document.querySelector(".clear-button");

$create.addEventListener("click", (event) => {
  event.preventDefault();
  const id = $createId.value;
  const password = $createPassword.value;
  const user = { id, password };
  let userList = readLocalStorage("userList", true);

  if (!userList) {
    userList = [user];
  }

  if (!isIncluded(userList, user)) {
    userList.push(user);
  }

  writeLocalStorage("userList", userList);
});

$login.addEventListener("click", () => {
  event.preventDefault();
  const id = $loginId.value;
  const password = $loginPassword.value;
  const user = { id, password };
  const userList = readLocalStorage("userList", true);

  if (!isIncluded(userList, user)) {
    return alert("아이디 또는 비밀번호가 일치하지 않습니다.");
  }
  $loginPage.classList.add("hidden");
  $todoPage.classList.remove("hidden");
});

$cleaner.addEventListener("click", () => {
  event.preventDefault();
  localStorage.clear();
});

function readLocalStorage(key, isObect = false) {
  let value = localStorage.getItem(key);
  if (isObect) {
    value = JSON.parse(localStorage.getItem(key));
  }
  return value;
}

function writeLocalStorage(key, value) {
  if (value && typeof value === "object") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
}

function isIncluded(userList, user) {
  return userList.some(
    (target) => target.id === user.id && target.password === user.password
  );
}

const addButton = document.getElementById("add-button");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  const text = todoInput.value;
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // 削除ボタンを作成
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  todoInput.value = ""; // 入力欄をクリア
});

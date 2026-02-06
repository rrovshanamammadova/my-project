
  const todoInput = document.getElementById("todoInput");
  const addBtn = document.getElementById("addBtn");
  const searchInput = document.getElementById("searchInput");
  const todoList = document.getElementById("todoList");

  function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }

  function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodo(text) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${text}</span>
      <button>Sil</button>
    `;

    li.querySelector("button").addEventListener("click", function () {
      li.remove();
      removeTodoFromStorage(text);
    });

    todoList.appendChild(li);
  }

  function removeTodoFromStorage(text) {
    let todos = getTodos();
    todos = todos.filter(todo => todo !== text);
    saveTodos(todos);
  }

  window.addEventListener("DOMContentLoaded", function () {
    const todos = getTodos();
    todos.forEach(todo => renderTodo(todo));
  });

  // ===== TODO ƏLAVƏ ET =====
  addBtn.addEventListener("click", function () {
    const text = todoInput.value.trim();
    if (text === "") return;

    renderTodo(text);

    const todos = getTodos();
    todos.push(text);
    saveTodos(todos);

    todoInput.value = "";
  });

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    const items = todoList.querySelectorAll("li");

    items.forEach(item => {
      const text = item.innerText.toLowerCase();
      item.style.display = text.includes(searchText) ? "flex" : "none";
    });
  });


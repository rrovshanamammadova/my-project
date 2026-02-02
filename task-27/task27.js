const todoInput = document.getElementById("todoInput");
  const addBtn = document.getElementById("addBtn");
  const todoList = document.getElementById("todoList");

  addBtn.addEventListener("click", function () {
    const text = todoInput.value.trim();
    if (text !== ""){
      todoList.innerHTML+=`
      <li>${text}</li>
      `
    }
    else{
      alert("You must wrtie something!")
    }
    
    todoInput.value = "";
  });



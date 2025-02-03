document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const DeleteAll = document.getElementById("DeleteAll");
  const ulTodo = document.getElementById("ul-todo");

  let editMode = false;
  let editElement = null;
  DeleteAll.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all tasks?")) {
      ulTodo.innerHTML = ""; 
      localStorage.removeItem("allTodos"); 
    }
  });

  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value;
    if (editMode) {
      editElement.querySelector(".text-todo").textContent = text;
      editMode = false;
      editElement = null;
      buttonTodo.textContent = "Add";
    } else {
      createTodo(text);
    }
    inputTodo.value = "";
    saveAllTodo();
  });

  const createTodo = (task) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-start";
    li.innerHTML = `<span class="text-todo">${task}</span>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-danger">Edit</button>
      <button type="button" class="btn btn-warning">Delete</button>
    </div>`;
    ulTodo.appendChild(li);
  };
  ulTodo.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-warning")) {
      e.target.closest(".list-group-item").remove();
      saveAllTodo();
    }
  
    if (e.target.classList.contains("btn-danger")) {
      const li = e.target.closest(".list-group-item");
      const taskTextElement = li.querySelector(".text-todo");
  
      // Create an input box with the current task text
      const inputBox = document.createElement("input");
      inputBox.type = "text";
      inputBox.className = "form-control";
      inputBox.value = taskTextElement.textContent;
  
      // Create a save button
      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.className = "btn btn-success ms-2";
  
      // Replace text with input box
      taskTextElement.replaceWith(inputBox);
      e.target.replaceWith(saveButton);
  
      // Save the changes when Save button is clicked
      saveButton.addEventListener("click", () => {
        const newText = inputBox.value.trim();
        if (newText) {
          // Create a new span element with updated text
          const updatedTaskText = document.createElement("span");
          updatedTaskText.className = "text-todo";
          updatedTaskText.textContent = newText;
  
          // Restore the Edit button
          const editButton = document.createElement("button");
          editButton.textContent = "Edit";
          editButton.className = "btn btn-danger";
  
          // Replace input with updated text and restore Edit button
          inputBox.replaceWith(updatedTaskText);
          saveButton.replaceWith(editButton);
  
          // Save to local storage
          saveAllTodo();
        }
      });
    }
  });
  
  const saveAllTodo = () => {
    const allTodos = [...document.querySelectorAll(".text-todo")].map(
      (task) => task.textContent
    );

    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  };

  const loadAllTodo = () => {
    const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
    allTodos.forEach((task) => createTodo(task));
  };

  loadAllTodo();
});

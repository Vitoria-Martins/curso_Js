const todoForm = document.querySelector("#todo-form");
 const todoInput = document.querySelector("#todo-input");
 const todoList = document.querySelector("#todo-list");
 const editForm = document.querySelector("#edit-form");
 const editInput = document.querySelector("#edit-input");
 const cancelEditBtn = document.querySelector("#cancel-edit-btn");

 //funçoes
const saveTodo = (text) => {
  const todo = Document.createElement("div");
  todo.classlist.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendchild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classlist.add("finish-todo");
  doneBtn.innerHTML ='<i class="fa-solid fa-check"></i>';
  todo.appendchild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classlist.add("edit-todo");
  editBtn.innerHTML ='<i class="fa-solid fa-pen"></i>';
  todo.appendchild(editBtn);

  const deletBtn = document.createElement("button");
  deletBtn.classlist.add("remove-todo");
  deletBtn.innerHTML ='<i class="fa-solid fa-xmark"></i>';
  todo.appendchild(deletBtn);

  todoList.appendchild(todo);

  todoInput.value = "";
  todoInput.focus();

};
//eventos
todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
    
    const inputValue = todoInput.value;
        
    if (inputValue) {
      saveTodo(inputValue);
       
    }
  } );
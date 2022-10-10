const todoForm =document.querySelector("#todo-form");
 const todoInput =document.querySelector("#todo-input");
 const todoList =document.querySelector("#todo-list");
 const editForm =document.querySelector("#edit-form");
 const editImput =document.querySelector("#edit-input");
 const cancelEditBtn =document.querySelector("#cancel-edit-btn");

 //funçoes
const savetodo = (text) => {
  const todo= Document.createElement("div");
  todo.classlist.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendchild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classlist.add("finish-todo");
  doneBtn.innerHTML ='<i class="fa-solid fa-check"></i>';
  todo.appendchild(doneBtn);

  const editBnt = document.createElement("button");
  editBnt.classlist.add("edit-todo");
  editBnt.innerHTML ='<i class="fa-solid fa-pen"></i>';
  todo.appendchild(editBnt);

  const deletBtn = document.createElement("button");
  deletBtn.classlist.add("remove-todo");
  deletBtn.innerHTML ='<i class="fa-solid fa-xmark"></i>';
  todo.appendchild(deletBtn);

  todoList.appendchild(todo);

};
//eventos
todoForm.addEventListener("submit", (e) => {
      e.preventDeFault();
    
    const inputValue = todoInput.value;
        
    if(inputValue) {
      saveTodo(inputValue);
       
    }
  } );
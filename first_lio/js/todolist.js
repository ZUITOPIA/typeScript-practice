const todoForm = document.querySelector("#enterTodo");
const todoInput = document.querySelector("#enterTodo input");
const todoList = document.querySelector("#todolist");

const todoSet = [];

function savedTodoArray(){
    localStorage.setItem("todoArray", todoArray); 
}

function removeTodo(){
    const removeList = event.target.parentElement; 
    removeList.remove();
}


function showTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span"); 
    span.innerText = newTodo;
    
    const button = document.createElement("button");
    button.addEventListener("click", removeTodo);
    button.innerText = "X";
    
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function handleTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todoSet.push(newTodo);
    showTodo(newTodo);
    savedTodoArray();
} 

todoForm.addEventListener("submit", handleTodo);
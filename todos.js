let todoItemsContainer=document.getElementById("todoItemsContainer");
let todoElement=document.createElement('li');
todoElement.classList.add("todo-item-container","d-flex","flex-row");
todoItemsContainer.appendchild(todoElement);


let inputElement=document.createElement("input");
inputElement.id="checkboxinput";
inputElement.type="checkbox";
inputElement.classList.add("checkbox-input");
todoItemsContainer.appendchild(inputElement);

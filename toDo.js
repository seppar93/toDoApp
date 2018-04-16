let todoList = {
  todos: [],

  // refractored display function

  // displayTodo: function (){
  //   if (this.todos.length === 0){
  //     console.log("your todo list is empty");
  //   } else {
  //     for (let i = 0; i < this.todos.length; i++){
  //       console.log('my todos:');
  //       if (this.todos[i].completed === true){
  //         console.log("(x)", this.todos[i].todoText);
  //       } else {
  //         console.log('()', this.todos[i].todoText);
  //       }
  //     }
  //   }
  // },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText, // the value is the peramter the key is just todoText;
      completed: false,
    });
    // this.displayTodo();
  },
  changeTodo: function(postion, todoText){
    this.todos[postion].todoText = todoText;
    // this.todos[postion] this is an object now
    // this.displayTodo();
  },
  deleteTodo: function(postion){
    this.todos.splice(postion, 1)
    // this.displayTodo();
  },
  toggleCompleted: function(postion) {
    let todo = this.todos[postion];
    todo.completed = !todo.completed;
    // this.displayTodo();
  },
  toggleAll: function(){
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    for (let i = 0; i < totalTodos; i++){
      if (this.todos[i].completed == true){
        completedTodos++;
      }

    }
    if(completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    } else {
      for (let i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
    // this.displayTodo();
  }

};

// document buttons
// let toggleAllButton = document.getElementById("buttonToggale");
// let displayTodoButton = document.getElementById("displayTodoButtons");
// console.log(displayTodoButton);

// events
// displayTodoButton.addEventListener("click", function() {
//   todoList.displayTodo();
// });
// toggleAllButton.addEventListener("click", function(){
//   todoList.toggleAll();
// });

// refractored into object;

let handlers = {
  // displayTodos: function() {
  //   todoList.displayTodo();
  // },
  addTodo: function() {
    let AddTodoTextInput = document.getElementById("AddTodoTextInput");
    todoList.addTodo(AddTodoTextInput.value);
    AddTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function(){
    let changeTodoPostionInput = document.getElementById("changeTodoPostionInput");
    let changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPostionInput.valueAsNumber,changeTodoTextInput.value);
    changeTodoPostionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function(postion) {
    // let deleteTodoPostionInput = document.getElementById("deleteTodoPostionInput");
    // todoList.deleteTodo(deleteTodoPostionInput.valueAsNumber);
    todoList.deleteTodo(postion);
    // deleteTodoPostionInput.value = "";
    view.displayTodos();
  },
  toggleCompleted: function() {
    let toggleCompletedPostionInput = document.getElementById("toggleCompletedPostionInput");
    todoList.toggleCompleted(toggleCompletedPostionInput.valueAsNumber);
    toggleCompletedPostionInput.value = "";
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();

  }

};

let view = {
  displayTodos: function (){
    let todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for (let i = 0; i < todoList.todos.length; i++){
      let todoLi = document.createElement("li");
      let todo = todoList.todos[i];
      let todoTextWithCompletion = "";

      if (todo.completed === true){
        todoTextWithCompletion = `(x) ${todo.todoText}`;
      } else {
        todoTextWithCompletion = `( ) ${todo.todoText}`;
      }

      todoLi.id = i;

      // todoLi.textContent = todoList.todos[i].todoText;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    let todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function(event){
      // console.log(event.target.parentNode.id); to see if it logs delets
      let elementClicked = event.target;
      // cheack if element clicked is a delete button
      if (elementClicked.className === "deleteButton"){
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};
view.setUpEventListeners();




















// inital strcuture

// function displayTodo(arr){
//   for(let i = 0; i < arr.length; i++){
//     console.log(`todo ${i+1}: ${arr[i]}`);
//   }
// }

// function addTodo(arr, todo){
//   arr.push(todo);
//   console.log(`${todo} has been added`);
// }

// function changeTodo(arr,postion, newValue){
//   arr[postion] = newValue;
//   console.log(`${newValue} has been added at todo: ${postion}`);
// }

// function deleteTodo(arr, todo){
//   for (let i = 0; i < arr.length; i++){
//     if (todo === arr[i]){
//       delete arr[i];
//       console.log(`${todo} has been delted`);
//       break;
//     }
//   }
// }

// console.log(todoList.deleteTodo(0));
// console.log(todoList.changeTodo(0,1));
// console.log(todoList.addTodo("babganoosh"));
// console.log(todoList.todos);
// console.log(todoList.displayTodo());
// console.log(todoList.changeTodo(0, "food"));
// console.log(todoList.todos);
// console.log(todoList.toggleCompleted(0));
// console.log(todoList.toggleAll());
// console.log(todoList.displayTodo());

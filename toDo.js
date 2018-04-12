let todoList = {
  todos: [],
  displayTodo: function (){
    if (this.todos.length === 0){
      console.log("your todo list is empty");
    } else {
      for (let i = 0; i < this.todos.length; i++){
        console.log('my todos:');
        if (this.todos[i].completed === true){
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log('()', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText, // the value is the peramter the key is just todoText;
      completed: false,
    });
    this.displayTodo();
  },
  changeTodo: function(postion, todoText){
    this.todos[postion].todoText = todoText;
    // this.todos[postion] this is an object now
    this.displayTodo();
  },
  deleteTodo: function(postion){
    this.todos.splice(postion, 1)
    this.displayTodo();
  }, toggleCompleted: function(postion) {
    let todo = this.todos[postion];
    todo.completed = !todo.completed;
    this.displayTodo();
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
    this.displayTodo();
  }

};




// console.log(todoList.deleteTodo(0));
// console.log(todoList.changeTodo(0,1));
console.log(todoList.addTodo("babganoosh"));
console.log(todoList.todos);
// console.log(todoList.displayTodo());
// console.log(todoList.changeTodo(0, "ass juice"));
// console.log(todoList.todos);
console.log(todoList.toggleCompleted(0));
console.log(todoList.toggleAll());
// console.log(todoList.displayTodo());














// function displayTodo(arr){
//   for(let i = 0; i < arr.length; i++){
//     console.log(`todo ${i+1}: ${arr[i]}`); // TODO: change log to return
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

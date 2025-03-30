// Practice to do list

const readLine = require("readline/promises");

let toDoListAppOpen = false;

let ToDoArray = [];

let userInput;

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const theTodoApp = async () => {
  console.log("Welcome to the to do list please enter a to do item");

  toDoListAppOpen = true;
  let count = 1;
  while (toDoListAppOpen) {
    
    
    const response = await rl.question(
      "Please enter to do item \n Please Enter Remove to Delete an Item \nOr please enter 3 to exit -"
    );
    if (response != "3" && response != "Remove") ToDoArray.push(response);
   
    userInput = response;
    console.log(count)
    console.log(ToDoArray);
    if (ToDoArray.length > 0) {
      console.log("\n----To Do List-----");

for (let i = 0; i < ToDoArray.length; i++) {
    console.log(`${i+1}. ${ToDoArray[i]}`)
}
    }

    if (userInput === "Remove") {
     let removeResponse = await rl.question(
        "Please selection the corresponding to list item number for item removal",
      );
      console.log(removeResponse)
    
        let newSplicedArray = ToDoArray.splice(removeResponse - 1, 1);
        ToDoArray = newSplicedArray;
        console.log(ToDoArray)
      
    }

    if (userInput === "3") {
      toDoListAppOpen = false;
    }
    
    count++;
  }

  rl.close();
  console.log("Goodbye");
};

theTodoApp();

//Arrays to keep track of each task's state
const taskTitles = [];
const taskCompletes = [];
const taskDescriptions = [];

function newTask(title, description) {
  const task = {
    title : title,
    description : description,
    complete : false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}
// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title) {s
//   taskTitles.push(title);
//   taskCompletes.push(false);
// }


const task1 = newTask("Clean Cat litter", "Take all the shit out of the litter box");
const task2 = newTask("Do Laundry", "😑");
const tasks = [task1, task2];
console.log(tasks);

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskCompletes[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskCompletes[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW
// function logTaskState(task) {
//   console.log(`${task.title} has ${task.complete ? " " : " not "}been completed`);
// }

// function completeTask(task) {
//   task.complete = true;
// }

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

// console.log(tasks)

task1.logState();
task1.markCompleted();
task1.logState();

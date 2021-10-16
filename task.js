let mainMenu = "";
let tasks = ["Charge Macbook", "Master Javascript"];

let currentTasks = "";
let currentTasksR = "";

goMainMenu();

function goMainMenu() {
    mainMenu = prompt(`TASK MANAGER\n\nWhat would you like to do? (Plese enter one of the options below):\n"TASKS" - Display All Tasks\n"NEW" - Add A New Task\n"REMOVE" - Remove A Task\n"CLOSE" - Close The Task Manager\n`);
    if (mainMenu !== "TASKS" && mainMenu !== "NEW" && mainMenu !== "REMOVE" && mainMenu !== "CLOSE") {
        goMainMenu();
    }

    if (mainMenu == "CLOSE") {
        alert(`Thank you for using Task Manager.`);
    }
    if (mainMenu == "TASKS") {
        TASKS();
    }
    if (mainMenu == "NEW") {
        NEW();
    }
    if (mainMenu == "REMOVE") {
        REMOVE();
    }
}
function TASKS() {
    alert(`${taskList()}`);
    goMainMenu();
}

function NEW() {
        let newTask = prompt(`Please enter the new task:\n\n0: Return to Main Menu\n`);
        if (parseInt(newTask) == 0) {
            goMainMenu();
        } else if (newTask == 0) {
            NEW();
        } else {
        tasks.push(newTask);
        alert(`${newTask} has been added.`);
        goMainMenu();
        }
}

function REMOVE() {
    let removeTask = prompt(`Please enter a number to remove the task:\n${taskListR()}\n 0: Return to Main Menu\n`);
        removeTask = Math.round(parseInt(removeTask));
        console.log(removeTask);
        if (removeTask == "NaN") {
            REMOVE();
        } else if (removeTask == 0) {
            goMainMenu();
        } else if (removeTask > 0 && removeTask <= tasks.length ) {
            alert(`${tasks[removeTask - 1]} has been removed.`);
            tasks.splice(removeTask - 1, 1);
            goMainMenu();
        } else {
            REMOVE();
        }
        
}

function taskList() {
    currentTasks = "";
    for (let i = 0; i < tasks.length; i++) {
        currentTasks = currentTasks + `${tasks[i]}\n`;
    }
    return currentTasks;
}

function taskListR() {
    currentTasksR = "";
    for (let i = 0; i < tasks.length; i++) {
        currentTasksR = currentTasksR + `${i + 1}: ${tasks[i]}\n`;
    }
    return currentTasksR;
}
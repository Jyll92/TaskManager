document.body.insertAdjacentHTML( 'afterbegin', '<div id="menu"></div>' );
let mainMenu = document.getElementById("menu");

let header;
let newHeader;

let close;
let tasks;
let addTask;
let removeTask;
let exitTaskManager;

let currentTasks = ["Charge Macbook", "Master Javascript"];
let tasksList;

let returnButton;

goMainMenu();

function goMainMenu() {
    mainMenu.innerHTML = '';
    mainMenu.insertAdjacentHTML( 'afterbegin', '<h1 id="menuHead">Welcome to Main Menu</h1>' );
    header = document.getElementById("menuHead");

    mainMenu.insertAdjacentHTML('beforeend', '<div id="close"><div id="bar1"></div><div id="bar2"></div></div>');
    close = document.getElementById("close");
    close.addEventListener("click", () => {
        EXIT();
    });

    mainMenu.insertAdjacentHTML('beforeend', '<h4 id="tasks">View Tasks</h4>');
    tasks = document.getElementById("tasks");
    tasks.addEventListener("click", () => {
        TASKS();
    });

    mainMenu.insertAdjacentHTML('beforeend', '<h4 id="addTask">Add A Task</h4>');
    addTask = document.getElementById("addTask");
    addTask.addEventListener("click", () => {
        addTASKS();
    });

    mainMenu.insertAdjacentHTML('beforeend', '<h4 id="removeTask">Remove Tasks</h4>');
    removeTask = document.getElementById("removeTask");
    removeTask.addEventListener("click", () => {
        removeTASKS();
    });

    mainMenu.insertAdjacentHTML('beforeend', '<h4 id="exitTaskManager">Exit</h4>');
    exitTaskManager = document.getElementById("exitTaskManager");
    exitTaskManager.addEventListener("click", () => {
        EXIT();
    });
}
function TASKS() {
    
    mainMenu.innerHTML = '';
    
    mainMenu.insertAdjacentHTML( 'afterbegin', '<h1 id="taskHead">Task List</h1>' );
    newHeader = document.getElementById("taskHead");
    mainMenu.insertAdjacentHTML('beforeend', '<div id="close"><div id="bar1"></div><div id="bar2"></div></div>');
    close = document.getElementById("close");
    close.addEventListener("click", () => {
        EXIT();
    });


    mainMenu.insertAdjacentHTML('beforeend', `<ul id="tasksList">${taskList()}</ul>`);
    tasksList = document.getElementById("tasksList");

    mainMenu.insertAdjacentHTML('beforeend', `<button id="returnMainMenu">Main Menu</button>`);
    returnButton = document.getElementById("returnMainMenu");
    returnButton.addEventListener("click", () => {
        goMainMenu();
    });
}
function addTASKS() {
    mainMenu.innerHTML = '';
    mainMenu.insertAdjacentHTML( 'afterbegin', '<h1 id="taskHead">Enter Task to Add</h1>' );
    newHeader = document.getElementById("taskHead");
    mainMenu.insertAdjacentHTML('beforeend', '<div id="close"><div id="bar1"></div><div id="bar2"></div></div>');
    close = document.getElementById("close");
    close.addEventListener("click", () => {
        EXIT();
    });

    mainMenu.insertAdjacentHTML( 'beforeend', '<div id="taskAdder"><input type="text" value="" placeholder="Enter Task to Add" id="taskToAdd"><button onclick="addThatTask()">Add Task</button></div>' );

    mainMenu.insertAdjacentHTML('beforeend', `<button id="returnMainMenu">Main Menu</button>`);
    returnButton = document.getElementById("returnMainMenu");
    returnButton.addEventListener("click", () => {
        goMainMenu();
})}
function removeTASKS() {
    mainMenu.innerHTML = '';
    mainMenu.insertAdjacentHTML( 'afterbegin', '<h1 id="taskHead">Task List</h1>' );
    newHeader = document.getElementById("taskHead");

    mainMenu.insertAdjacentHTML('beforeend', '<div id="close"><div id="bar1"></div><div id="bar2"></div></div>');
    close = document.getElementById("close");
    close.addEventListener("click", () => {
        EXIT();
    });

    mainMenu.insertAdjacentHTML('beforeend', `<form id="tasksRemovalList">${taskListRemove()}</form>`);
    tasksList = document.getElementById("tasksRemovalList");
    tasksList.insertAdjacentHTML('beforeend', `<button type="button" onclick="removeATask()">End Selected Task</button>`)

    mainMenu.insertAdjacentHTML('beforeend', `<button id="returnMainMenu">Main Menu</button>`);
    returnButton = document.getElementById("returnMainMenu");
    returnButton.addEventListener("click", () => {
        goMainMenu();
    });
}
function taskList() {
    let theList = "";
    for (let i = 0; i < currentTasks.length; i++) {
        console.log(currentTasks[i]);
        theList = theList + `<li id="${i}ref">${currentTasks[i]}</li>`;
        // return `<li>${currentTasks[i]}</li>`;
    }
    return theList;
}
function taskListRemove() {
    let theList = "";
    for (let i = 0; i < currentTasks.length; i++) {
        console.log(currentTasks[i]);
        theList = theList + `<div><input type="radio" id="opt${i}" name="taskRemoval" value="${i}"><label for="opt${i}" class="taskItem">${currentTasks[i]}</label></div>`;
    }
    return theList;
}
function removeATask() {
    let removal = document.getElementsByName('taskRemoval');
    for(i = 0; i < removal.length; i++) {
        if(removal[i].checked) {
            // alert(`${currentTasks[removal[i].value]} has been removed.`);
            document.body.insertAdjacentHTML('beforeend', `<div id="confirmRemoved"><h3>${currentTasks[removal[i].value]} has been removed.</h3><button onclick="confirmRemoved()">OK</button></div>`);
            currentTasks.splice(removal[i].value, 1);
            goMainMenu();
            removeTASKS();
        }
    }
}
function addThatTask() {
    let newTask = document.getElementById("taskToAdd").value;
    if (newTask == 0) {
        if (parseInt(newTask) === 0){
            currentTasks.push(newTask);
            document.body.insertAdjacentHTML('beforeend', `<div id="newTaskAdded"><h3>${newTask} has been added.</h3></div>`);
            goMainMenu();
            addTASKS();
            setTimeout(function() {
                let newAdded = document.getElementById("newTaskAdded");
                newAdded.remove();
            }, 2300)
        } else alert(`No Task Found: Please Enter a Task to Add`)
    } else {
        currentTasks.push(newTask);
        document.body.insertAdjacentHTML('beforeend', `<div id="newTaskAdded"><h3>${newTask} has been added.</h3></div>`);
            goMainMenu();
            addTASKS();
            setTimeout(function() {
                let newAdded = document.getElementById("newTaskAdded");
                newAdded.remove();
            }, 2300)
    }
}
function EXIT() {
    document.body.insertAdjacentHTML('beforeend', '<div id="confirmClose"><h3>Confirm to Close</h3><button onclick="confirmQuit()">Exit Task Manager</button><button onclick="back()">Back</button></div>');
}
function confirmQuit() {
    document.body.innerHTML = '';
    document.body.insertAdjacentHTML('beforeend', '<button onclick="launchTaskManager()" id="launchTaskManager">Launch Task Manager</button>')
    
}
function back() {
    let closeMenu = document.getElementById("confirmClose");
    closeMenu.remove();
}
function confirmRemoved() {
    let closeRemoved = document.getElementById("confirmRemoved");
    closeRemoved.remove();
}
function launchTaskManager() {
    document.body.innerHTML = '';
    document.body.insertAdjacentHTML( 'afterbegin', '<div id="menu"></div>' );
    mainMenu = document.getElementById("menu");
    goMainMenu();
}
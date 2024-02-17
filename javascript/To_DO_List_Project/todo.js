(function () {
    let tasks = [];
    const taskList = document.getElementById('list');
    const addTaskInput = document.getElementById('add');
    const tasksCounter = document.getElementById('tasks-counter');

    async function fetchToDos() {
        //GET request
        //   fetch('https://jsonplaceholder.typicode.com/todos')
        //   .then((res) => {
        //     return res.json(); //.json again return another promise. so use another then below line
        //   }).then((data) => {
        //     tasks = data.slice(0,10); //get only 10 items
        //     renderList();
        //   }).catch((error)=> {
        //     console.log("error",error);
        //   });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            tasks = data.slice(0, 10); //get only 10 items
            renderList();
        } catch (error) {
            console.log(error);
        }

    }
    function addTaskToDOM(task) {
        const li = document.createElement('li');

        li.innerHTML = `
              <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom-checkbox">
              <label for="${task.id}">${task.title}</label>
              <div class="delete-icon" data-id="${task.id}"><i  class="fa-solid fa-trash delete"></i></div>
        `;

        taskList.append(li);
    }

    function renderList() {
        taskList.innerHTML = '';
        for (let i = 0; i < tasks.length; i++) {
            addTaskToDOM(tasks[i]);
        }

        tasksCounter.innerHTML = tasks.length;
    }

    function toggleTask(taskId) {
        const task = tasks.filter((task) => {
            return task.id === Number(taskId);
        });

        if (task.length > 0) {
            const currentTask = task[0];
            currentTask.completed = !currentTask.completed;
            renderList();
            showNotification('Task toggled successfully');
            return;
        }

        showNotification('could not toggle the task');
    }

    function deleteTask(taskId) {
        const newTask = tasks.filter((task) => {
            return task.id !== Number(taskId);
        });

        tasks = newTask;
        renderList();
        showNotification('Task deleted successfully');
        return;
    }

    function addTask(task) {
        if (task) {
            // fetch('https://jsonplaceholder.typicode.com/todos', {
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(task), // body data type must match "Content-Type" header
            // })
            //     .then((res) => {
            //         return res.json(); //.json again return another promise. so use another then below line
            //     }).then((data) => {
            //         console.log(data);
            //         tasks.push(task);
            //         renderList();
            //         showNotification('Task added successfully');
            //     }).catch((error) => {
            //         console.log("error", error);
            //     });

            tasks.push(task);
            renderList();
            showNotification('Task added successfully');
            return;
        }

        showNotification('Task can not be added');
    }

    function showNotification(text) {
        alert(text);
    }

    function handleInputKeyPress(e) {
        //if user press enter add task
        if (e.key === 'Enter') {
            const text = e.target.value;
            console.log("text",text);
            if (!text) {
                showNotification("Text can not be empty!")
                return;
            }

            const task = {
                title: text,
                id: Date.now(),
                completed: false
            }

            e.target.value = ''; //when the user press enter input field becomes empty
            addTask(task);
        }
    }

    function handleClickListener(e) {
        const target = e.target;
        console.log('target',target);
        if (target.className === 'delete-icon') {
            const taskId = target.dataset.id;
            console.log("delete cond", taskId)
            deleteTask(taskId);
            return;
        } else if (target.className === 'custom-checkbox') {
            console.log("checkbox con")
            const taskId = target.id;
            toggleTask(taskId);
            return;
        }
    }
        
    function initializeApp() {
        fetchToDos();
        addTaskInput.addEventListener('keyup', handleInputKeyPress);
        document.addEventListener('click', handleClickListener);
    }

    initializeApp();
})();
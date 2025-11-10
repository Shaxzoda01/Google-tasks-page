function overlayOn() {
    document.getElementById("overlay").style.display = "flex";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}

const btnAll = document.getElementById('btn-all');
const btnStarred = document.getElementById('btn-starred');
const tasksAll = document.getElementById('tasks-all');
const tasksStarred = document.getElementById('tasks-starred');

function showAllTasks() {
    tasksAll.style.display = 'block';
    tasksStarred.style.display = 'none';
    btnAll.classList.add('active');
    btnStarred.classList.remove('active');
}

function showStarredTasks() {
    tasksAll.style.display = 'none';
    tasksStarred.style.display = 'block';
    btnStarred.classList.add('active');
    btnAll.classList.remove('active');
}

//<i class="ri-arrow-down-s-line"></i>

function createListOn() {
    document.getElementById("create-list-overlay").style.display = "flex";
}

function createListOff() {
    document.getElementById("create-list-overlay").style.display = "none";
}

function checkInput() {
    const input = document.getElementById("listNameInput");
    const submitBtn = document.getElementById("createListSubmit");

    if (input.value.trim().length > 0) {
        submitBtn.classList.add("create-list-btn-active");
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.remove("create-list-btn-active");
        submitBtn.disabled = true;
    }
}

var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
var months = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сент", "окт", "нояб", "дек"]

var currentDate = new Date();
var day = days[now.getDay()];
var date = now.getDate();
var month = months[now.getMonth()];

var currentDateFormatted = `Выполнена: ${day}, ${date} ${month}.`;


// function addTask() {
//     var taskDiv = document.querySelector(".add-task-wrapper");
//     taskDiv.style.display = "flex";
// }

function addTask() {
    const container = document.getElementById("tasks-container");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("add-task-wrapper");
    taskDiv.innerHTML = `
        <label class="radio">
            <input type="radio" name="choice" class="remove-radio">
            <span class="custom-radio"></span>
        </label>
        <div class="add-wrapper">
            <input type="text" placeholder="Название">
            <div style="display: flex; gap: 8px; align-items: center;">
                <i style="font-size: 13px;" class="ri-bar-chart-horizontal-line"></i>
                <input style="font-size: 13px;" type="text" placeholder="Дополнительная информация">
            </div>
            <div>
                <button id="today-btn">Сегодня</button>
                <button id="tomorrow-btn">Завтра</button>
            </div>
        </div>
    `;

    container.appendChild(taskDiv);

    // сразу привязываем обработчик к radio
    const radio = taskDiv.querySelector(".remove-radio");
    radio.addEventListener("change", () => {
        taskDiv.remove(); // удаляем блок при выборе радио
        console.log("Радио нажато, блок удалён!");
    });
}
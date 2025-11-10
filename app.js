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

function addTask() {
    var taskDiv = document.querySelector(".add-task-wrapper");
    taskDiv.style.display = "flex";
    var infoContainer = document.getElementById("info")
    infoContainer.style.display = "none";

}

var selectedDay = '';

function selectDay(day) {

    selectedDay = day;
    var container = document.getElementById('day-buttons');

    if (day === 'Сегодня') {
        container.innerHTML = '<button class="task-day-btn active" onclick="selectDay(\'Сегодня\')">' +
            '<i class="ri-calendar-event-fill"></i>Сегодня ' +
            '<span onclick="resetDay()"><i class="ri-close-large-fill"></i></span>' +
            '</button>';
    } else {
        container.innerHTML = '<button class="task-day-btn active" onclick="selectDay(\'Завтра\')">' +
            '<i class="ri-calendar-event-fill"></i>Завтра ' +
            '<span onclick="resetDay()"><i class="ri-close-large-fill"></i></span>' +
            '</button>';
    }
}

function resetDay() {
    selectedDay = '';
    var container = document.getElementById('day-buttons');
    container.innerHTML = '<button class="task-day-btn" onclick="selectDay(\'Сегодня\')">Сегодня</button>' +
        '<button class="task-day-btn" onclick="selectDay(\'Завтра\')">Завтра</button>';
}

function handleRadioClick() {
    var wrapper = document.getElementById('tasks-container');

    var name = document.getElementById('taskNameInput').value;
    var info = document.getElementById('taskInfoInput').value;

    var day = selectedDay || 'Не выбран';

    var list = document.getElementById('task-list-finished-wrapper');

    var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
    var months = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сент", "окт", "нояб", "дек"]

    var currentDate = new Date();
    var day = days[currentDate.getDay()];
    var date = currentDate.getDate();
    var month = months[currentDate.getMonth()];

    var currentDateFormatted = `Выполнена: ${day}, ${date} ${month}.`;

    list.innerHTML += `<li class="task-list-finished">
        <button><i class="ri-check-line"></i></button>
        <ul>
            <del>${name}</del>
            <p class="tasks-list-subtitle">${info}</p>
            <p class="tasks-list-date">${currentDateFormatted}</p>
        </ul>
    </li>
`
    list.insertAdjacentHTML('beforebegin', `
    <div id="info2" class="info2">
        <img src="https://www.gstatic.com/tasks/all-tasks-completed-light.svg" alt="" width="104px" height="104px">
        <p class="info-title">Все задачи выполнены</p>
        <p class="info-subtitle">Ура!</p>
    </div>
`);
    wrapper.parentNode.removeChild(wrapper);
}

function addNewTask() {
    var section = document.getElementById('section')
    var listNameInputValue = document.getElementById('listNameInput').value
    section.innerHTML += `
     <div id="tasks-all" class="wrapper">
                <div class="wrapper-header">
                    <p class="section-title">${listNameInputValue}</p>
                    <button class="wrapper-header__btn"><i class="ri-more-2-fill"></i></button>
                </div>
                <button class="add-task-btn" onclick="addTask()">
                    <svg height="24" width="24">
                        <rect fill="none" height="24" width="24"></rect>
                        <path
                            d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 c1.57,0,3.04,0.46,4.28,1.25l1.45-1.45C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c1.73,0,3.36-0.44,4.78-1.22 l-1.5-1.5C14.28,19.74,13.17,20,12,20z M19,15h-3v2h3v3h2v-3h3v-2h-3v-3h-2V15z">
                        </path>
                    </svg>
                    Добавить задачу
                </button>
                <div class="add-task-wrapper" style="display: none;" id="tasks-container">
                    <label class="radio">
                        <input type="radio" name="choice" class="remove-radio" onclick="handleRadioClick()">
                    </label>
                    <div class="add-wrapper">
                        <input id="taskNameInput" type="text" placeholder="Название">
                        <div style="display: flex; gap: 8px; align-items: center; ">
                            <i style="font-size: 13px;" class="ri-bar-chart-horizontal-line"></i>
                            <input id="taskInfoInput" style="font-size: 13px;" type="text"
                                placeholder="Дополнительная информация">
                        </div>
                        <div id="day-buttons" style="margin-top:8px">
                            <button class="task-day-btn" onclick="selectDay('Сегодня')">Сегодня</button>
                            <button class="task-day-btn" onclick="selectDay('Завтра')">Завтра</button>
                        </div>
                    </div>
                </div>
                <div id="info" class="info">
                    <img src="https://www.gstatic.com/tasks/empty-tasks-light.svg" alt="" width="104px" height="104px">
                    <p class="info-title">Задач нет</p>
                    <p class="info-subtitle">Добавляйте списки задач и отслеживайте их выполнение в Google Workspace</p>
                </div>
                <ul id="task-list-finished-wrapper"></ul>
        </div>`
    createListOff()
}



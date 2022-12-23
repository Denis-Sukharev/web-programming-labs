function showDate(params) {
    let out = document.getElementById('today');
    let today = new Date();
    out.innerHTML = today.toLocaleDateString('ru-RU');
}

function showDaysCount(params) {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    let result = document.getElementById('result');
    daysCount = Math.floor(daysCount); // округляем в меньшую сторону
    result.innerHTML = 'С даты рождения прошло дней: ' + daysCount;
}

window.addEventListener('load', showDate);

function showTime() {
    let outTime = document.getElementById('time');
    let currentTime = new Date();
    outTime.innerHTML = currentTime.toLocaleTimeString('ru');
}

window.addEventListener('load', showTime);
setInterval(showTime, 1000);

function showNewDate(params) {
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let days = document.querySelector('input[type=number]').value;
    let NewDate = birthday.getTime() + days*1000*60*60*24;
    NewDate = new Date(NewDate).toLocaleDateString();
    results.innerHTML = 'Дата после прибавления: ' + NewDate;
}

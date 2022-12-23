function showDate(params) {
    let out = document.getElementById('today');
    let today = new Date();
    Year = today.getFullYear();
    Month = today.getMonth();
    Day = today.getDate();
    switch (Month) {
    case 0: fMonth="января"; break;
    case 1: fMonth="февраля"; break;
    case 2: fMonth="марта"; break;
    case 3: fMonth="апреля"; break;
    case 4: fMonth="мая"; break;
    case 5: fMonth="июня"; break;
    case 6: fMonth="июля"; break;
    case 7: fMonth="августа"; break;
    case 8: fMonth="сентября"; break;
    case 9: fMonth="октября"; break;
    case 10: fMonth="ноября"; break;
    case 11: fMonth="декабря"; break;
    }
    out.innerHTML = Day + " " + fMonth + " " + Year + " года";
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
    Hour = currentTime.getHours();
    Minutes = currentTime.getMinutes();
    Seconds = currentTime.getSeconds();
    outTime.innerHTML = Hour + " ч " + Minutes + " м " + Seconds + " с";
}

window.addEventListener('load', showTime);
setInterval(showTime, 1000);

function showNewDate(params) {
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let days = document.querySelector('input[type=number]').value;
    let NewDate = birthday.getTime() + days*1000*60*60*24;
    NewDate = new Date(NewDate);
    Year = NewDate.getFullYear();
    Month = NewDate.getMonth();
    Day = NewDate.getDate();
    switch (Month) {
    case 0: fMonth="января"; break;
    case 1: fMonth="февраля"; break;
    case 2: fMonth="марта"; break;
    case 3: fMonth="апреля"; break;
    case 4: fMonth="мая"; break;
    case 5: fMonth="июня"; break;
    case 6: fMonth="июля"; break;
    case 7: fMonth="августа"; break;
    case 8: fMonth="сентября"; break;
    case 9: fMonth="октября"; break;
    case 10: fMonth="ноября"; break;
    case 11: fMonth="декабря"; break;
    }
    results.innerHTML = 'Дата после прибавления: ' + Day + " " + fMonth + " " + Year + " года";
}

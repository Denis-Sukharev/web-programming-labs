function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Сухарев Денис';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-01, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'введите имя';

    document.getElementById('your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById('input-surname').placeholder = 'введите фамилию';

    document.getElementById('your-age').innerHTML = 'Ваш возраст';
    document.getElementById('input-age').placeholder = 'введите возраст';

    document.getElementById('ok-button').value = 'ок';

    document.getElementById('reset-button').value = 'сброс';
}

function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Sukharev Denis';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-01, 3rd year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'enter your name';

    document.getElementById('your-surname').innerHTML = 'Your surname';
    document.getElementById('input-surname').placeholder = 'enter your surname';

    document.getElementById('your-age').innerHTML = 'Your age';
    document.getElementById('input-age').placeholder = 'enter your age';

    document.getElementById('ok-button').value = 'ok';

    document.getElementById('reset-button').value = 'reset';
}
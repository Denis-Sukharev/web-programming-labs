function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}

function clickFIO(button) {
    if(button.innerHTML == 'Денис Сухарев')
        button.innerHTML = 'Сухарев Денис';
    else
        button.innerHTML = 'Денис Сухарев';
}

function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ' ' + ', y = ' + event.offsetY + ' ' + 
    (event.ctrlKey? '<b>Ctrl</b>':'<s>Ctrl</s>') + ' ' + (event.shiftKey? '<b>Shift</b>':'<s>Shift</s>') + 
    ' ' + (event.altKey? '<b>Alt</b>':'<s>Alt</s>' );
}

window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);
});

function knopka(button) {
    if(button.innerHTML == 'Нажми меня') {
        button.innerHTML = 'Ещё раз нажми';
        button.style.color = 'green';
    }
        
    else if(button.innerHTML == 'Ещё раз нажми') {
        button.innerHTML = 'Ещё';  
        button.style.color = 'red';
    }
         
    else if(button.innerHTML == 'Ещё') {
        button.innerHTML = 'Начать сначала';   
        button.style.color = 'blue';
    }
        
    else {
        button.innerHTML = 'Нажми меня' 
        button.style.color = 'orange'; 
    }
}
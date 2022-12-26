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

function showFocus(event) {
    event.target.style.color = 'green';
    event.target.style.fontSize = "25px";
}

function showBlur(event) {
    event.target.style.color = 'black';
    event.target.style.fontSize = "14px";
}

window.addEventListener('DOMContentLoaded', function() {
    let texts = document.querySelectorAll('input[type="text"]');
    texts[0].addEventListener('focus', showFocus);
    texts[1].addEventListener('focus', showFocus);
    texts[2].addEventListener('focus', showFocus);
    texts[0].addEventListener('blur', showBlur);
    texts[1].addEventListener('blur', showBlur);
    texts[2].addEventListener('blur', showBlur);
});

function showOutput(e){
    document.getElementById('output').innerHTML = e.target.value;
}

window.addEventListener('DOMContentLoaded', function() {
let texts = document.querySelectorAll('input[type="text"]');
    texts[0].addEventListener('change', showOutput);
    texts[1].addEventListener('change', showOutput);
    texts[2].addEventListener('change', showOutput);
})

window.addEventListener('DOMContentLoaded', function() {
    var prod1 = document.getElementById('prod1');
    var prod2 = document.getElementById('prod2');
    prod1.addEventListener('change', function() {
        prod2.value = prod1.value;
})});

window.addEventListener('DOMContentLoaded', function() {
    var prod3 = document.getElementById('prod3');
    var prod4 = document.getElementById('prod4');
    prod3.addEventListener('change', function() {
        prod4.value = prod3.value;
})});

window.addEventListener('DOMContentLoaded', function() {
    var prod5 = document.getElementById('prod5');
    var prod6 = document.getElementById('prod6');
    prod5.addEventListener('change', function() {
        prod6.value = prod5.value;
})});

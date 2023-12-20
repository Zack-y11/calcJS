
let expresion = ''

function addChar (char){
    expresion += char
    updateDisplay()
}
function delAll (){
    expresion = ''
    updateDisplay()
    document.getElementById('display').innerText = '0'
}
function deleteChar(){
    expresion = expresion.slice(0,-1)
    updateDisplay()
}
function operate (){
    try{
        const resultado = eval(expresion)
        expresion = resultado
        updateDisplay()
    }catch(error){
        expresion = 'Error'
        updateDisplay()

    }
}

function updateDisplay(){
    document.getElementById('display').innerText = expresion
}

const btnCalculadora = document.querySelectorAll('button');


btnCalculadora.forEach(boton => {
    boton.addEventListener('mouseover', () => changeColor(boton));
    boton.addEventListener('mouseout', () => restaurarColor(boton));
});

function changeColor(boton) {
    const colorRandom = generateColorRandom();
    boton.style.backgroundColor = colorRandom;
}

function restaurarColor(boton) {
    boton.style.backgroundColor = ''; 
}

function generateColorRandom() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const num1 = document.getElementById('num1');
const pantallaSuperior = document.getElementById('pantallaSuperior');
const operando = document.getElementById('operando');
const calculadora = document.querySelector('.contenedor__calculadora');

let inputSeleccionado = null;
let num2;

num1.disabled = false;

num1.addEventListener('click', function() {
    inputSeleccionado = num1;
})

calculadora.addEventListener(`click`, function(evento) {
    pantallaSuperior.textContent = "";
    if (evento.target.classList.contains('numeros')) {
        if (inputSeleccionado) {
            inputSeleccionado.value += evento.target.textContent;
        }
    } else
    if (evento.target.id == "boton--sumar") {
        operando.textContent = "+";
        num2 = num1.value;
        num1.value = "";
        num1.disabled = true;
        console.log(Number(num1.value))
    } else if (evento.target.id == "boton--restar") {
        operando.textContent = "-";
        num2 = num1.value;
        num1.value = "";
        num1.disabled = true;
    } else if (evento.target.id == "boton--multiplicar") {
        operando.textContent = "*";
        num2 = num1.value;
        num1.value = "";
        num1.disabled = true;
    } else if (evento.target.id == "boton--dividir") {
        operando.textContent = "/";
        num2 = num1.value;
        num1.value = "";
        num1.disabled = true;
    } else if (evento.target.id == 'boton--C') {
        num1.value = "";
        num2 = "";
        pantallaSuperior.textContent = "";
        operando.textContent = "";
        num1.disabled = false;
    } else if (evento.target.id = "boton--igual") {
        if (operando.textContent == "+") {
            pantallaSuperior.textContent = Number(num1.value) + Number(num2);
            num2 = "";
        } else if (operando.textContent == "-") {
            pantallaSuperior.textContent = Number(num1.value) - Number(num2);
            num2 = "";
        } else if (operando.textContent == "*") {
            pantallaSuperior.textContent = Number(num1.value) * Number(num2);
            num2 = "";
        } else if (operando.textContent == "/") {
            if ((num2 != "") & (num1.value == "")) {
                pantallaSuperior.textContent = `Debes ingresar un divisor`;
            } else if ((num2 == "") & (num1.value != "")) {
                pantallaSuperior.textContent = `0`;
            } else if ((num2 != "") & (num1.value == 0)) {
                pantallaSuperior.textContent = `No se puede dividir entre 0`;
            } else if ((num1.value != "") & (num2 != "")) {
                pantallaSuperior.textContent = Number(num2) / Number(num1.value);
                num2 = "";
            }
        }
    }
})

/* --------------- ESCUCHA POR TECLADO ---------------*/

document.addEventListener('keydown', function(event) {

    const teclaPresionada = event.key;

    if (teclaPresionada === 'Enter') { // Ejecutar función de igual
        igual.click();
    } else if (teclaPresionada === '+') {
        sumar.click();
    } else if (teclaPresionada === '-') {
        restar.click();
    } else if (teclaPresionada === '*') {
        multiplicar.click();
    } else if (teclaPresionada === '/') {
        dividir.click();
    } else if (teclaPresionada === 'Backspace') { // Ejecutar función de borrar uno
        borrarUno.click();
    } else if (teclaPresionada === "0") {
        num0.click()
    } else if (teclaPresionada === "1") {
        num1.click()
    } else if (teclaPresionada === "2") {
        num2.click()
    } else if (teclaPresionada === "3") {
        num3.click()
    } else if (teclaPresionada === "4") {
        num4.click()
    } else if (teclaPresionada === "5") {
        num5.click()
    } else if (teclaPresionada === "6") {
        num6.click()
    } else if (teclaPresionada === "7") {
        num7.click()
    } else if (teclaPresionada === "8") {
        num8.click()
    } else if (teclaPresionada === "9") {
        num9.click()
    }
});
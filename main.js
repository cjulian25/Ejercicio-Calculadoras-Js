const num0 = document.getElementById('numero0')
const num1 = document.getElementById('numero1')
const num2 = document.getElementById('numero2')
const num3 = document.getElementById('numero3')
const num4 = document.getElementById('numero4')
const num5 = document.getElementById('numero5')
const num6 = document.getElementById('numero6')
const num7 = document.getElementById('numero7')
const num8 = document.getElementById('numero8')
const num9 = document.getElementById('numero9')

const borrarTodo = document.getElementById('botonC')
const igual = document.getElementById('botonIgual')
const sumar = document.getElementById('botonSumar')
const restar = document.getElementById('botonRestar')
const multiplicar = document.getElementById('botonMultiplicar')
const dividir = document.getElementById('botonDividir')

let numDigitado = document.getElementById('numDigitado');
const pantallaSuperior = document.getElementById('pantallaSuperior');
const operando = document.getElementById('operando');

pantallaSuperior.textContent = "";
let numGuardado;

borrarTodo.addEventListener(`click`, function() {
    numGuardado.value = "";
    numDigitado.value = "";
    pantallaSuperior.textContent = "";
    operando.textContent = "";
})

igual.addEventListener(`click`, function() {
    if (operando.textContent == "+") {
        pantallaSuperior.textContent = Number(numGuardado) + Number(numDigitado.value);
        numDigitado.value = "";
        operando.textContent = "";
    } else if (operando.textContent == "-") {
        pantallaSuperior.textContent = Number(numGuardado) - Number(numDigitado.value);
        numDigitado.value = "";
        operando.textContent = "";
    } else if (operando.textContent == "*") {
        pantallaSuperior.textContent = Number(numGuardado) * Number(numDigitado.value);
        numDigitado.value = "";
        operando.textContent = "";
    } else if (operando.textContent == "/") {
        if ((numGuardado != "") & (numDigitado.value == "")) {
            pantallaSuperior.textContent = `Debes ingresar un divisor`;
        } else if ((numGuardado == "") & (numDigitado.value != "")) {
            pantallaSuperior.textContent = `0`;
        } else if ((numGuardado != "") & (numDigitado.value == 0)) {
            pantallaSuperior.textContent = `No se puede dividir entre 0`;
        } else if ((numDigitado.value != "") & (numGuardado != "")) {
            pantallaSuperior.textContent = Number(numGuardado) / Number(numDigitado.value);
            numDigitado.value = "";
            operando.textContent = "";

        }
    }
})

multiplicar.addEventListener(`click`, function() {
    operando.textContent = "*";
    numGuardado = numDigitado.value;
    numDigitado.value = "";
})

dividir.addEventListener(`click`, function() {
    operando.textContent = "/";
    numGuardado = numDigitado.value;
    numDigitado.value = "";
})

sumar.addEventListener(`click`, function() {
    operando.textContent = "+";
    numGuardado = numDigitado.value;
    numDigitado.value = "";
})

restar.addEventListener(`click`, function() {
    operando.textContent = "-";
    numGuardado = numDigitado.value;
    numDigitado.value = "";
})


num0.addEventListener(`click`, function() {
    numDigitado.value += 0;
})

num1.addEventListener(`click`, function() {
    numDigitado.value += 1;
})

num2.addEventListener(`click`, function() {
    numDigitado.value += 2;
})

num3.addEventListener(`click`, function() {
    numDigitado.value += 3;
})

num4.addEventListener(`click`, function() {
    numDigitado.value += 4;
})

num5.addEventListener(`click`, function() {
    numDigitado.value += 5;
})

num6.addEventListener(`click`, function() {
    numDigitado.value += 6;
})

num7.addEventListener(`click`, function() {
    numDigitado.value += 7;
})

num8.addEventListener(`click`, function() {
    numDigitado.value += 8;
})

num9.addEventListener(`click`, function() {
    numDigitado.value += 9;
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

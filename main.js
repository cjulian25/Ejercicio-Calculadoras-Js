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

const raizCuadrada = document.getElementById('raizCuadrada')
const punto = document.getElementById('botonPunto')
const potencia = document.getElementById('botonPotencia')
const borrarUno = document.getElementById('botonBorrar')
const borrarTodo = document.getElementById('botonC')
const igual = document.getElementById('botonIgual')
const sumar = document.getElementById('botonSumar')
const restar = document.getElementById('botonRestar')
const multiplicar = document.getElementById('botonMultiplicar')
const dividir = document.getElementById('botonDividir')

const pantallaSuperior = document.querySelector('.pantalla--superior')
const array = []
const newArray = []
let conteoDivision0 = 0

pantallaSuperior.textContent = 0

function contenido() {
    let contenidoPantalla = "";
    for (let i = 0; i < array.length; i++) {
        contenidoPantalla += array[i];
    }
    pantallaSuperior.textContent = contenidoPantalla;
    console.log(array)
}

sumar.addEventListener('click', function() {
    if ((array[array.length - 1] == "+") || (array[array.length - 1] == "-") || (array[array.length - 1] == "*") || (array[array.length - 1] == "/") || (array[array.length - 1] == "√") || (array[array.length - 1] == "^") || (array[array.length - 1] == ".")) {
    } else {
        array.push("+");
        contenido()
    }
})

restar.addEventListener(`click`, function() {
    if ((array[array.length - 1] == "-") || (array[array.length - 1] == "+") || (array[array.length - 1] == "*") || (array[array.length - 1] == "/") || (array[array.length - 1] == "√") || (array[array.length - 1] == "^") || (array[array.length - 1] == ".")) {
    } else {
        array.push("-");
        contenido()
    }
})

multiplicar.addEventListener(`click`, function() {
    if ((array[array.length - 1] == "*") || (array[array.length - 1] == "/") || (array[array.length - 1] == "+") || (array[array.length - 1] == "-") || (array[array.length - 1] == "√") || (array[array.length - 1] == "^") || (array[array.length - 1] == ".")) {
    } else {
        array.push("*");
        contenido()
    }
})

dividir.addEventListener(`click`, function() {
    if ((array[array.length - 1] == "/") || (array[array.length - 1] == "*") || (array[array.length - 1] == "+") || (array[array.length - 1] == "-") || (array[array.length - 1] == "√") || (array[array.length - 1] == "^") || (array[array.length - 1] == ".")) {
    } else {
        array.push("/");
        contenido()
    }
})

raizCuadrada.addEventListener(`click`, function() {
    if ((array[array.length - 1] == "√") || (array[array.length - 1] == "/") || (array[array.length - 1] == "*") || (array[array.length - 1] == "+") || (array[array.length - 1] == "-") || (array[array.length - 1] == "^") || (array[array.length - 1] == ".")) {
    } else {
        array.push("√");
        contenido()
    }
})

punto.addEventListener(`click`, function() {
    if ((array[array.length - 1] == ".") || (array[array.length - 1] == "/") || (array[array.length - 1] == "*") || (array[array.length - 1] == "+") || (array[array.length - 1] == "-") || (array[array.length - 1] == "√") || (array[array.length - 1] == "^")) {
    } else {
        array.push(".");
        contenido()
    }
})

potencia.addEventListener(`click`, function() {
    if ((array[array.length - 1] == "^") || (array[array.length - 1] == "√") || (array[array.length - 1] == "/") || (array[array.length - 1] == "*") || (array[array.length - 1] == "+") || (array[array.length - 1] == "-") || (array[array.length - 1] == ".")) {
    } else {
        array.push("^");
        contenido()
    }
})

borrarUno.addEventListener(`click`, function() {
    // array.splice(-1, 1)
    array.pop()
    contenido()
})

borrarTodo.addEventListener(`click`, function() {
    pantallaSuperior.textContent = 0
    resultado = 0
    conteoDivision0 = 0
    array.splice(0, array.length)
    newArray.splice(0, newArray.length)
    console.log(array)
})

igual.addEventListener(`click`, function() {
    let resultado = 0
    let concatenado = "";

    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        if (elemento === "+" || elemento === "-" || elemento === "*" || elemento === "/" || elemento === "^" || elemento === "√") {
            newArray.push(concatenado);
            newArray.push(elemento);
            concatenado = "";
        } else {
            concatenado += elemento;
        }
    }
    newArray.push(concatenado);

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === "^") {
            resultado = Number(newArray[i - 1]) ** Number(newArray[i + 1])
            newArray.splice(i - 1, 3, resultado)
            console.log(resultado)
            console.log(newArray)
            i = 0
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        console.log(newArray)
        if (newArray[i] === "√" && (newArray[i - 1] == NaN || newArray[i - 1] == "")) {
            resultado = Number(newArray[i + 1]) ** (1 / 2)
            newArray.splice(i, 2, resultado)
            console.log(resultado)
            console.log(newArray)
            i = 0
        }
        if (newArray[i] === "√" && newArray[i - 1] != NaN) {
            resultado = Number(newArray[i - 1]) * Number(newArray[i + 1]) ** (1 / 2)
            newArray.splice(i - 1, 3, resultado)
            console.log(resultado)
            console.log(newArray)
            i = 0
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === "*") {
            resultado = Number(newArray[i - 1]) * Number(newArray[i + 1])
            newArray.splice(i - 1, 3, resultado)
            console.log(resultado)
            i = 0
        }
        if (newArray[i] === "/") {
            if (newArray[i + 1] == "0") {
                resultado = `No se puede dividir entre 0`
                conteoDivision0 = 1
                break
            } else {
                resultado = Number(newArray[i - 1]) / Number(newArray[i + 1])
                newArray.splice(i - 1, 3, resultado)
                console.log(resultado)
                i = 0
            }
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        if (conteoDivision0 == 1) {
            resultado = `No se puede dividir entre 0`
            break
        }
        if (newArray[i] === "+") {
            resultado = Number(newArray[i - 1]) + Number(newArray[i + 1])
            newArray.splice(i - 1, 3, resultado)
            console.log(resultado)
            i = 0
        }
        if (newArray[i] === "-") {
            resultado = Number(newArray[i - 1]) - Number(newArray[i + 1])
            newArray.splice(i - 1, 3, resultado)
            console.log(resultado)
            i = 0
        }
    }
    pantallaSuperior.textContent = resultado
    conteoDivision0 = 0
})

num0.addEventListener(`click`, function() {
    array.push("0");
    contenido()
})

num1.addEventListener(`click`, function() {
    array.push("1");
    contenido()
})

num2.addEventListener(`click`, function() {
    array.push("2");
    contenido()
})

num3.addEventListener(`click`, function() {
    array.push("3");
    contenido()
})

num4.addEventListener(`click`, function() {
    array.push("4");
    contenido()
})

num5.addEventListener(`click`, function() {
    array.push("5");
    contenido()
})

num6.addEventListener(`click`, function() {
    array.push("6");
    contenido()
})

num7.addEventListener(`click`, function() {
    array.push("7");
    contenido()
})

num8.addEventListener(`click`, function() {
    array.push("8");
    contenido()
})

num9.addEventListener(`click`, function() {
    array.push("9");
    contenido()
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
    } else if (teclaPresionada === 'q') {
        raizCuadrada.click();
    } else if (teclaPresionada === '.' || teclaPresionada === ',') {
        punto.click();
    } else if (teclaPresionada.altKeyPressed && teclaPresionada.keyCode === '94') {
        potencia.click();
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

let op1 = parseInt(prompt('Bienvenido a la tienda de mascotas "Firulais" en que lo podemos ayudar hoy? -> Digite 1 para comprar una mascota. -> 2 para curar su mascota. -> 3 para salir.'))

function bienvenida() {
    if (op1 == 1) {
        let op2 = prompt("Que mascota desea comprar. ->1 Perro. ->2 Gato.")
        return op2
    }
    else if (op1 == 2) {
        let nombre = prompt("Ingrese el nombre de su mascota.")
        let especie = prompt("Ingrese la especie: -> 1 para perrro. -> 2 para gato.")
        return nombre, especie
    }
    else {
        alert("No ingresó una opción correcta. Por favor recargue.")
    }
}

function comprar(op2) {
    if (op2 == 1) {
        alert("Usted va a comprar perro.")
    }
    else if (op2 == 2) {
        alert("Usted va a comprar un gato.")
    }
    else { alert("No ingresó una opción correcta. Por favor recargue.") }
}

bienvenida()
comprar()
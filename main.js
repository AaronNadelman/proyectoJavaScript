// Siumlar una pizzeria que:

// - salude al usuario al ingresar.
// -  de un menu para elegir.
// - pida una direccion.
// - muestre el detalle del pedido.




function menu() {
    let usuario = prompt("ingrese su nombre")
    alert('Pizzeria Luigi 🍕🍕, bienvenido/a!!! ' + usuario)
    let op = prompt("Ahora escriba el nombre de la pizza que desea: 1 > musa. 2 > napo. 3 > especial.")
    let direccion = prompt("Ingrese su direccion por favor:")
    if (op.toLowerCase() == "musa" || op.toLowerCase() == "napo" || op.toLowerCase() == "especial") {
        alert('Muy bien ' + usuario + ' su pizza ' + op + ' será enviada a ' + direccion)
    }
    else {
        alert("Error, por favor vuelva a intentar")
        console.error("Opción inválida")
    }
}

function seguirOrdenando() {
    let continuarOrdenando = true;

    while (continuarOrdenando) {
        const respuesta = prompt("¿Quieres volver ordenar? (Sí/No)").toLowerCase();

        if (respuesta === "si") {
            let op = prompt("Ahora escriba el nombre de la pizza que desea: 1 > musa. 2 > napo. 3 > especial.")
            if (op.toLowerCase() == "musa" || op.toLowerCase() == "napo" || op.toLowerCase() == "especial") {
                alert('Muy bien ' + ' su pizza ' + op + ' será enviada')
                continuarOrdenando = true
            }
            else {
                alert("Error, por favor vuelva a intentar")
                console.error("Opción inválida")
                continuarOrdenando = true
            }
        }

        if (respuesta === "no") {
            alert("Gracias por elegirnos")
            continuarOrdenando = false;
        }
    }
}

function main() {
    menu()
}

main()
seguirOrdenando()


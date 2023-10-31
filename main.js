// Siumlar una pizzeria que:

// - salude al usuario al ingresar.
// -  de un menu para elegir.
// - pida una direccion.
// - muestre el detalle del pedido.



function saludar() {
    let usuario = prompt("ingrese su nombre")
    alert('Pizzeria Luigi 🍕🍕, bienvenido/a!!! ' + usuario)
}

function menu() {
    let op = prompt("Ahora escriba el nombre de la pizza que desea: 1 > muzzarela. 2 > napolitana. 3 > especial.")
    let direccion = prompt("Ingrese su direccion por favor:")
    if (op == "muzzarela" || op == "napolitana" || op == "especial") {
        alert('Su pizza ' + op + ' sera enviada a ' + direccion)
    }
    else {
        alert("Error, por favor vuelva a intentar")
        console.error("Opción inválida")
    }
}

function seguirOrdenando() {
    let continuarOrdenando = true;

    while (continuarOrdenando) {
        const respuesta = prompt("¿Quieres seguir ordenando? (Sí/No)").toLowerCase();

        if (respuesta === "si") {
            menu()
            continuarOrdenando = true
        }

        if (respuesta === "no") {
            alert("Gracias por elegirnos")
            continuarOrdenando = false;
        }
    }
}

function main() {
    saludar()
    menu()
}

main()
seguirOrdenando()


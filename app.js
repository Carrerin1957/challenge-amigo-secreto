// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim(); // Eliminar espacios en blanco

    // Expresión regular para validar solo letras y espacios
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (amigo === "") {
        alert("Por favor ingrese un nombre");
        return;
    }

    if (!regex.test(amigo)) {
        alert("El nombre solo debe contener letras y espacios, sin números ni caracteres especiales.");
        return;
    }

    if (amigos.includes(amigo)) {
        alert("El amigo ya se encuentra en la lista");
        return;
    }

    // Si pasa todas las validaciones, agregar a la lista
    amigos.push(amigo);

    actualizarLista();

    

    // Limpiar el input después de agregar el amigo
    document.getElementById("amigo").value = "";
}

// Crear y actualizar la lista de amigos en el DOM
function actualizarLista() {
    let list = document.getElementById("listaAmigos");
    list.innerHTML = ""; // Limpiar la lista antes de volver a generarla

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        list.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista");
        return;
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    let result = document.getElementById("resultado");
    result.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}


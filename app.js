// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres de los amigos
let amigos = [];

function limpiarCaja() {
    const input = document.getElementById("amigo");
    input.value = '';  // Limpia el campo
    input.focus();  // Mantiene el foco en la caja de texto
}


function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y al final
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios permitidos

    // Validaciones
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        limpiarCaja();
        return;
    }

    if (!regex.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
        limpiarCaja();
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        limpiarCaja();
        return;
    }

    
    // Agregar el nombre a la lista
    amigos.push(nombre);
    actualizarLista();

    // Limpiar el campo de texto
    input.value = "";
    input.focus();
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar el nombre de la lista
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar el elemento de la lista
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un amigo antes de sortear.");
        return;
    }

    // Elegir un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}

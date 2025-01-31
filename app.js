// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Obtener los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const botonAdicionar = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const botonSortear = document.querySelector('.button-draw');
const resultado = document.getElementById('resultado');

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    // Validación de entrada
    if (nombre === '') {
        alert('Por favor ingresa un nombre válido.');
    } else {
        amigos.push(nombre); // Agregar el nombre al array
        mostrarLista(); // Actualizar la lista visual
        inputAmigo.value = ''; // Limpiar el campo de texto
    }
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de renderizarla
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('¡Añade al menos un nombre para realizar el sorteo!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSecreto}!</li>`;
}


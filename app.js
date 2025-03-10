let listaAmigos = [];
let control = 1;
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;
    if (amigo === "") {
        alert("Debes ingresar un nombre primero");
        return;
    }

    listaAmigos.push(amigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    amigosParticipantes();
}

function amigosParticipantes() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = `-> ${amigo}`;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2 && control === 1) {
        alert("Debes ingresar al menos dos amigos");
        return;
    }
    control = 0;
 
    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos.splice(indice, 1)[0]; // Elimina el amigo sorteado del array para que no se repita
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;

    if (listaAmigos.length === 0) {
        resultado.innerHTML += "<p>¡Todos los amigos han sido sorteados!</p>";
        document.getElementById("sortear").disabled = true;
    }
}

function reiniciarSorteo() {
    listaAmigos = [];
    amigosParticipantes();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    document.getElementById("sortear").disabled = false;
}

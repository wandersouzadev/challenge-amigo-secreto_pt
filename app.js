//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function adicionarAmigo() {
  const nomeAmigo = document.getElementById("amigo").value;
  const listaAmigos = document.getElementById("listaAmigos");
  const itemLista = document.createElement("li");
  itemLista.textContent = nomeAmigo;
  listaAmigos.appendChild(itemLista);
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  const listaAmigos = document.getElementById("listaAmigos");
  const amigos = Array.from(listaAmigos.children).map(
    (amigo) => amigo.textContent
  );
  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").textContent = amigoSorteado;
}

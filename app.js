//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de texto
    let nomeAmigo = document.getElementById("amigo").value.trim();

    // Valida se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return; // Sai da função se o campo estiver vazio
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de texto
    document.getElementById("amigo").value = "";

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    // Captura o elemento <ul> onde os nomes serão exibidos
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpa a lista atual para evitar duplicatas
    listaAmigos.innerHTML = "";

    // Percorre o array de amigos e adiciona cada nome como um <li>
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild(itemLista);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return; // Sai da função se não houver amigos
    }

    // Gera um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Captura o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    document.getElementById("resultado").innerHTML = `
        <li>Amigo secreto: <strong>${amigoSorteado}</strong></li>
    `;
}
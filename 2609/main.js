function gerarDivLivro() {
    // Obter os valores inseridos pelo usuário
    var nomeLivro = document.getElementById("nomeLivro").value;
    var autor = document.getElementById("autor").value;
    var numPaginas = document.getElementById("numPaginas").value;
    var paisLancamento = document.getElementById("paisLancamento").value;

    // Criar uma nova div com as informações do livro
    var livroDiv = document.createElement("div");
    livroDiv.classList.add("livro");

    var titulo = document.createElement("h2");
    titulo.textContent = nomeLivro;

    var nomeAutor = document.createElement("h3");
    nomeAutor.textContent = "Autor: " + autor;

    var infoLivro = document.createElement("p");
    infoLivro.textContent = "Número de Páginas: " + numPaginas + ", País de Lançamento: " + paisLancamento;

    // Limpar a div anterior (se houver)
    var divAnterior = document.getElementById("livroDiv");
    while (divAnterior.firstChild) {
        divAnterior.removeChild(divAnterior.firstChild);
    }

    // Adicionar a nova div com as informações do livro à página
    livroDiv.appendChild(titulo);
    livroDiv.appendChild(nomeAutor);
    livroDiv.appendChild(infoLivro);
    document.getElementById("livroDiv").appendChild(livroDiv);
}
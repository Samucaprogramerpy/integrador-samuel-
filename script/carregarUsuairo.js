

botao.addEventListener("click", function carregarPagina(nome) {
    const conteudo = document.getElementById("Func");
    if (!conteudo) return; // evita erro se a div não existir

    // Salva a última página clicada no localStorage
    localStorage.setItem("ultimaPagina", nome);

    // Faz requisição AJAX
    fetch(nome + ".html")
        .then(response => response.text())
        .then(html => {
            conteudo.innerHTML = html; // atualiza o conteúdo da div
        })
        .catch(err => console.error("Erro ao carregar a página:", err));
})

window.onload = function () {
    const ultima = localStorage.getItem("ultimaPagina") || "home"; // padrão: home
    carregarPagina(ultima);
};

const load = document.getElementById('Func');
load.innerHTML = loadPageIntoDiv('agendamento.html', 'Func');

async function loadPageIntoDiv(url, divId, event, loadFunc) {
    try {
        const response = await fetch(url);
        const data = await response.text();

        const divSec = document.getElementById(divId);
        
        // 1. Cria um elemento temporário para analisar o HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;

        localStorage.setItem('ultimaPagina', url);

        // 2. Encontra todos os scripts
        const scripts = tempDiv.querySelectorAll('script');

        // 3. Adiciona o HTML limpo (sem scripts) ao div
        // Isso é feito para evitar que os scripts sejam duplicados
        const htmlContent = tempDiv.innerHTML.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
        divSec.innerHTML = htmlContent;

        // 4. Itera sobre os scripts e os adiciona ao corpo do documento
        // Isso garante que o navegador os execute
        scripts.forEach(script => {
        const newScript = document.createElement('script');
        
        // Copia os atributos do script original
        Array.from(script.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
        });

        // Copia o conteúdo do script, se houver
        if (script.src) {
            newScript.src = script.src;
        } else {
            newScript.textContent = script.textContent;
        }

        document.body.appendChild(newScript);
        });
    } catch (error) {
        console.error('Erro ao carregar a página:', error);
    }

}

const Menu = document.querySelectorAll("#menu li");
Menu.forEach(item => {
    item.addEventListener("click", function () {
    // Remove a classe de todos os itens
        Menu.forEach(el => el.classList.remove("funcionalidadeSelecionada"));

        // Adiciona ao item clicado
        this.classList.add("funcionalidadeSelecionada");
        const API = 'http://localhost:3000/professores'
        fetch(API)
            .then(response => response)
            .then(data => {
                console.log(data)
            })

    });
});


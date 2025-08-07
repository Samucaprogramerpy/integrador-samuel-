const botao = document.getElementById("botao-salvar")

botao.addEventListener("click", async () => {
    const dados = {
        nome: 'Maria Paul',
        email : 'mariapaula@email.com'
    };

    const API = 'http://localhost:3000/professores';

    try {
        const response = await fetch(API, {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(dados)
        });
        if (response.ok) {
            console.log('200, ok')
        } else {
            const mensagemErro = await response.text();
            throw new Error(mensagemErro);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
    
})
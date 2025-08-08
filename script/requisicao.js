const criar = document.getElementById("Add");
const nome_prof = document.getElementById("nome");
const email_prof = document.getElementById("email");

criar.addEventListener("click", async () => {

    Nome = nome_prof.value;
    Email = email_prof.value;

    const dados = {
        nome : Nome,
        email : Email
    }

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
            console.log(response)
        } else {
            const mensagemErro = await response.text();
            throw new Error(mensagemErro);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }

    
    
})
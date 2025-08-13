const criar = document.getElementById("Add");
const nome_prof = document.getElementById("nome");
const email_prof = document.getElementById("email");
const usuarios = document.getElementById("usuarios");

criar.addEventListener("click", async function async ()  {
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

        const readdata = await response.text();
        console.log(readdata);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${readdata}`)
        }

    }
    
    catch(error) {
        console.error('Erro ao buscar dados', error)
    }


})


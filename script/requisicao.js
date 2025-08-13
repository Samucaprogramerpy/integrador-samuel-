

const criar = document.getElementById("Add");
const nome_prof = document.getElementById("nome");
const email_prof = document.getElementById("email");
const usuarios = document.getElementById("usuarios");


document.addEventListener("DOMContentLoaded", carregar() )

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

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${readdata}`)
        }

    }
    
    catch(error) {
        console.error('Erro ao buscar dados', error)
    }

    modal.style.display = 'none';
    carregar();
})

async function carregar() {
    fetch('http://localhost:3000/professores')
        .then(resposta => resposta.text())
        .then(dados => {
            const dado = JSON.parse(dados);
             const fragmento = document.createDocumentFragment();
            dado.forEach(dado => {
                
                const usuario = document.createElement('div');
                usuario.className = 'usuario';
                const nome = document.createElement('h4');
                nome.textContent = dado.nome;
                
                usuario.appendChild(nome)
                fragmento.appendChild(usuario)
            })
            usuarios.appendChild(fragmento)
        }) 
        .catch(error => {
            console.error("erro na requisição", error);
        });
}


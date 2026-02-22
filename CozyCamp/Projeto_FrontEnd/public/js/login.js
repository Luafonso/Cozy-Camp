// Outras funções 
function gerarForm(){
    const modal = document.querySelector("dialog")
    modal.showModal()
    
}

function fecharModal(){
    const modal = document.querySelector("dialog")
    modal.close()
}




// Login -- Verificar se o email e senha batem
const ola = document.getElementById("ola")

ola.addEventListener("click", async (event) =>{
    event.preventDefault(); //Prevenir o envio padrão do form

    const login_input = document.getElementById("emailDialog").value;
    const senha_input = document.getElementById("senha").value;

    try {
        const response = await fetch("/verificar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": login_input,
                "senha": senha_input
            })
        })

        if(response.ok){
            const data = await response.json()
            console.log("Login feito com sucesso: ", data)
            alert("Login com sucesso")
        }
        else {
            const error = await response.json()
            console.error("Erro ao logar: ", error)
            alert("Login com falha")
        }
    }
    catch (err) {
        console.error("Erro: ", err)
    }
})



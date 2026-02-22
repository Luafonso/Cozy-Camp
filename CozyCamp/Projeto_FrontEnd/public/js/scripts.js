// Cadastro

const form = document.getElementById("formCadastro")

form.addEventListener("submit", async (event) =>{
    event.preventDefault(); //Prevenir o envio padrão do form

    const formData = new FormData(form)
    const formDataObject = Object.fromEntries(formData.entries())
    try {
        const response = await fetch("/salvar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDataObject)
        })

        if(response.ok){
            const data = await response.json()
            console.log("Conta criada com sucesso: ", data)
            alert("Cadastro feito com sucesso!")
            window.location.href = "/home"
        }
        else {
            const error = await response.json()
            console.error("Erro ao criar a conta: ", error)
        }
    }
    catch (err) {
        console.error("Erro: ", err)
    }
})






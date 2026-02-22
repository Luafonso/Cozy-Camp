import modelo from "../models/modelo.js"

const { cadastros } = modelo

export const verificarLogin = async (req, res) => {
    const { email, senha } = req.body
    console.log(email, senha)
    try {
        const usuario = await cadastros.findOne({ where: { email: email }})
        console.log(usuario)
        if(usuario.email === email && usuario.senha === senha){
            res.status(200).json({
                message: "Login bem-sucedido",
                user: usuario,
            })
        }
        else {
            res.status(401).json({
                message: "E-mail ou senha incorretos"
            })
        }
    }
    catch (error){
        console.error("Erro: ", error)

    }
}



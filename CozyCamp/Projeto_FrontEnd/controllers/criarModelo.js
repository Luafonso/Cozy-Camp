import models from "../models/modelo.js";
/** 
 * Criar um novo modelo de cadastro
 */
const { cadastros } = models


export const criarModelo = async (req, res) => {
    const { nome, email, senha } = req.body
    try {
        const novoCadastro = await cadastros.create({ nome, email, senha })
        res.status(201).json(novoCadastro)
    }catch (err) {
        if (err.name === "SequelizeConnectionError"){
            // Erro de conexão com o banco de dados 
            res.status(500).json({ error: "Erro de conexão com o banco de dados"})
        }
        else if (err.name === "SequelizeValidationError"){
            // Erro de validação
            res.status(400).json({ error: "Erro de validação", details: err.errors })
        }
        else {
            // Outros erros
            res.status(500).json({ error: "Erro ao criar cadastro", details: err.message})
        }
    }
}


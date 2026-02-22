import express from 'express'
import { criarModelo } from '../controllers/criarModelo.js'
import { verificarLogin } from '../controllers/verificarLogin.js'

const router = express.Router()



router.get("/", (req, res) =>{
    res.render("index.ejs")
})

router.post("/salvar", criarModelo )


router.get("/home", (req, res) =>{
    res.render("home.ejs")
})

router.post("/verificar", verificarLogin)


export default router
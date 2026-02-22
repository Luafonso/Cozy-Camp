import express from 'express'
import router from './routes/rotaCadastro.js';
import sequelize from "./config/database.js"

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', './views')

// Adicionando os arquivos CSS e imagens
app.use(express.static('public'))
app.use(express.json()); // Necessário para analisar JSON

// Rotas
app.use('/', router)

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexão com o banco de dados foi estabelecida com sucesso.")
        app.listen(PORT, () =>{
            console.log(`Server is running on port ${PORT}`)
        });
    }
    catch (err) {
        console.error("Não foi possível conectar o banco de dados: " + err)
    }
}
startServer()


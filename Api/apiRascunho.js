const express = require('express');
const mongoose = require("mongoose");


const app = express()
const cors = require('cors')

app.use(cors())

app.use(

    express.urlencoded({
        extended: true

    })
)
app.use(express.json())

//rota da API
const Routes = require('../routes/routes.js')

//rascunnho o caminho da rota, exemplo é  http://localhost:3000/rascunho

app.use('/rascunho', Routes)


//rota inicial
app.get('/', (req, res) => {

    res.json({ message: 'Oi express!' })

})


const username = "";
const password = encodeURIComponent("");
const cluster = "";
const dbname = "";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
)


    .then(() => {
        console.log("conectado")
        app.listen(3000)
    })
    .catch((err) => console.log(err))
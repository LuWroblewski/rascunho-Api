const mongoose = require("mongoose");


const rascunhoSchema = new mongoose.Schema({
    nome: String,
    idade: String,
});

const rascunho = mongoose.model("rascunho", rascunhoSchema);


module.exports = rascunho

//se for dois module.exports = { x, y }

const router = require('express').Router()

const rascunho = require('../models/models.js');
//se for 2 ou mais => const { x, y} = require('../models/models.js')



//criação de dados

router.post("/", async (req, res) => {

    const { nome, idade } = req.body

    const rascunhoRoute = {
        nome,
        idade,

    }

    try {
        await rascunho.create(rascunhoRoute)
        res.status(201).json({ message: 'Post realizado com sucesso' })
    } catch (error) {
        res.status(500).json({ error: error })

    }

});



// leitura de dados, read
router.get('/rascunho', async (req, res) => {

    try {
        const rascunhoRead = await rascunho.find()

        if (!rascunhoRead) {
            res.status(422).json({ message: 'erooooou' })
            return;
        }
        res.status(200).json(rascunhoRead)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})


//ler apenas um id, search
// se for outro dado exemplo 'nome', apenas mudar para
//router.get('/:nome',
//const nome = req.params.nome

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const idRascunho = await rascunho.findOne({ _id: id })

        if (!idRascunho) {
            res.status(422).json({ message: 'Id não encontrado' })
            return;
        }
        res.status(200).json(idRascunho)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

//update
// se for outro dado exemplo 'nome', apenas mudar para
//router.get('/:nome',
//const nome = req.params.nome

router.patch('/:id', async (req, res) => {
    const id = req.params.id

    const { nome, idade } = req.body

    const rascunhoRoute = {
        nome,
        idade,

    }

    try {
        const updateRascunho = await rascunho.updateOne({ _id: id }, rascunhoRoute)
        res.status(200).json(rascunhoRoute)

        if (updateRascunho.matchedCount === 0) {
            res.status(422).json({ message: 'não realizado' })
            return;
        }
    } catch (error) {
        res.status(500).json({ error: error })
    }

})


//delete
// se for outro dado exemplo 'nome', apenas mudar para
//router.get('/:nome',
//const nome = req.params.nome

router.delete('/:id', async (req, res) => {
    const id = req.params.id


    const deleteRascunho = await rascunho.findOne({ _id: id })

    if (!deleteRascunho) {
        res.status(422).json({ message: 'Id não encontrado' })
        return;
    }
    try {
        await rascunho.deleteOne({ _id: id })
        res.status(200).json({ message: 'delete feito com sucesso' })


    } catch (error) {
        res.status(500).json({ error: error })

    }



})

module.exports = router
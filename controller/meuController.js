const meu = require('../models/meuCadastro');

const list = async (req, res) => {
    try {
        const meu = await meu.findAll();
        res.send({...meu})
    } catch (error) {
        res.status(500).send(error)
    }
}


const create = async (req, res) => {
    try {
        const meu = await meu.create({...req.body})
        res.send({...meu})
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports= {list,create}
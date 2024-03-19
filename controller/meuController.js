const PessoaModel = require('../models/pessoaModel');

const list = async (req, res) => {
    try {
        const Pessoa = await PessoaModel.findAll();
        res.send({...Pessoa})
    } catch (error) {
        res.status(500).send(error)
    }
}


const create = async (req, res) => {
    console.log("Qualquer")
    
    try {
        const Pessoa = await PessoaModel.create({...req.body})
        res.send({...Pessoa})
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}


/*const editMeuById = async (req, res) => {
    try {
        if(req?.params?.id){
            throw Error("Tarefa não existe")
        }
        const Pessoa = await Pessoa.update({...req.body}, {where: {id: req.params.id}})
        res.send({...Pessoa})
    } catch (error) {
        res.status(500).send(error)
    }
}*/

module.exports= {list,create,}
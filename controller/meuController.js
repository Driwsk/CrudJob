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
    try {
        const Pessoa = await PessoaModel.create({...req.body})
        res.send({...Pessoa})
    } catch (error) {
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

const Pessoas = [];

function classPessoas(cpf, nome, email, idade, stst) {
    this.cpf = cpf;
    this.nome = nome;
    this.email = email;
    this.idade = idade;
    this.stst = stst;
}



function criarPessoas() {
    const cpfPessoa = document.getElementById("txtCpf").value;
    const nomePessoa= document.getElementById("txtNome").value;
    const emailPessoa = document.getElementById("txtEmail").value;
    const idadePessoa = document.getElementById("txtIdade").value;
    const ststPessoa = document.getElementById("txtStst").value;

    const repete = 0;

    if (!isNaN(cpfPessoa) && !isNaN(nomePessoa) && !isNaN(emailPessoa) && !isNaN(idadePessoa) && !isNaN(ststPessoa)) {
        for (const j = 0; j < pessoas.length; j++) {
            if (Pessoas[j].cpf == cpfPessoa) {
                Pessoas[j].nome = nomePessoa;
                Pessoas[j].email = emailPessoa;
                Pessoas[j].idade = idadePessoa;
                Pessoas[j].stst = ststPessoa;
                repetido = 1;
            }
            if (repetido == 0) {
                var novaPessoa = new classClientes(cpfPessoa, nomePessoa, emailPessoa, idadePessoa, ststPessoa);
                pessoas.push(novaPessoa);
            }

        }
    }
    
}


module.exports= {list,create,}
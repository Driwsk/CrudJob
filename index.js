const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Meu CRUD Aqui')
})

var Pessoas = [];

function classPessoa(cpf, nome, email, idade, stst) {
    this.cpf = cpf;
    this.nome = nome;
    this.email = email;
    this.idade = idade;
    this.stst = stst;
}



function criarPessoas() {
    var cpfPessoa = document.getElementById("txtCpf").value;
    var nomePessoa= document.getElementById("txtNome").value;
    var emailPessoa = document.getElementById("txtEmail").value;
    var idadePessoa = document.getElementById("txtIdade").value;
    var ststPessoa = document.getElementById("txtStst").value;

    var repete = 0;

    if (!isNaN(cpfPessoa) && !isNaN(nomePessoa) && !isNaN(emailPessoa) && !isNaN(idadePessoa) && !isNaN(ststPessoa)) {
        for (var j = 0; j < pessoas.length; j++) {
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

app.listen(port, () => {
  console.log(`meu servidor esta aqui http://localhost:${port}`)
})
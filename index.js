const express = require('express')
const banco = require('./infraestrutura/bancoDeDados')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Meu CRUD Aqui')
})

banco.sync();

app.listen(port, () => {
  console.log(`meu servidor esta aqui http://localhost:${port}`)
})
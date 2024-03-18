const express = require('express')
const banco = require('./infraestrutura/bancoDeDados')
const meuRouters = require('./routers/meuRouters')
const app = express()
const port = 3000
app.use(express.json())
app.use("/pessoa", meuRouters)

banco.sync();

app.listen(port, () => {
  console.log(`meu servidor esta aqui http://localhost:${port}`)
})


const {Router} = require("express")
const { list, create, editMeuById, deleteMeuById } = require("../controller/meuController")
const meuRouters = Router()

meuRouters.get('/', list)
meuRouters.post('/', create)
meuRouters.post('/', editMeuById)
meuRouters.delete('/:id', deleteMeuById)

module.exports = meuRouters;
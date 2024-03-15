const {Router} = require("express")
const { list, create } = require("../controller/meuController")
const meuRouters = Router()

meuRouters.get('/', list)
meuRouters.post('/', create)

module.exports = meuRouters;
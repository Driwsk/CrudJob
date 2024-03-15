const {Router} = require("express")
const { list, create } = require("../controller/meuController")
const meuRouters = Router()

meuRouters.get('/', list, create)
meuRouters.post('/', meuRouters)

module.exports = meuRouters;
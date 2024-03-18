const {Router} = require("express")
const { list, create, editMeuById } = require("../controller/meuController")
const meuRouters = Router()

meuRouters.get('/', list)
meuRouters.post('/', create)
/*meuRouters.post('/', editMeuById)*/

module.exports = meuRouters;
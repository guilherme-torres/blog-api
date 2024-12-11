const express = require("express")

const UserRepository = require("./repositories/UserRepository")
const UserService = require("./services/UserService")
const UserController = require("./controllers/UserController")

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

const router = express.Router()

router.get("/articles", (request, response) => {
    return response.send("listar artigos")
})

router.get("/articles/:id", (request, response) => {
    return response.send("buscar artigo de id " + request.params.id)
})

router.post("/articles", (request, response) => {
    return response.send("criar artigo")
})

router.post("/users", (request, response) => { userController.create(request, response) })

module.exports = router
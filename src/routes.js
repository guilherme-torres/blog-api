const express = require("express")

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

module.exports = router
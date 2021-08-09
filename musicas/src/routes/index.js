const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Reprograma - On12 Semana 13 - Integração do Banco de Dados Mongo com API",
        version: "1.0.0"
    })
})

module.exports = router
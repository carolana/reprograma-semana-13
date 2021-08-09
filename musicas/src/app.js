  
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/reprograma-musics", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function() {
    console.log("Conexão com MongoDB feita com sucesso!")
})

const app = express()

//rotas
const index = require("./routes/index")
const musics = require("./routes/musics")

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use(express.json())
app.use("/", index)
app.use("/musics", musics)

module.exports = app
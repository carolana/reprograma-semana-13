const express = require("express")
const router = express.Router()
const controller = require("../controllers/musicsController")

// post - criacao
router.post("/create", controller.createMusic)

// delete - remoção
router.delete("/delete/:id", controller.deleteMusic)

// put e patch - alteração
router.put("/update/:id", controller.updateMusic)
router.patch("/:id/updateTitle", controller.updateTitle)

// get - recuperação
router.get("/musics", controller.getAllMusics)
router.get("/:id", controller.getMusic)

module.exports = router;
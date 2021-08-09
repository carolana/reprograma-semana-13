const musics = require("../models/musics")
const fs = require("fs")

const createMusic = (req, res) => {
    let {
        title,
        artist,
        album,
        duration,
        launchYear
    } = req.body

    const music = {
        "id": Math.random().toString(32).substr(2),
        title,
        artist,
        album,
        duration,
        launchYear
    }

    let newMusic = new musics(music)
    newMusic.save(function (err) {
        if(err) {
            res.status(500).send({message: err.message})
        } else {
            musics.updateOne({$set: {music}}),
            res.status(201).send({
                message: "Música adicionada com sucesso"
            })
        }
    })
}


const deleteMusic = (req, res) => {
    const musicId = req.params.id
    musics.findOne({id: musicId}, function (err, musicsFound) {
        if(err) {
            res.status(500).send({message: err.message})
        } else {
            if(musicsFound) {
                musics.deleteOne({id: musicId}, function(err) {
                    if (err) {
                        res.status(500).send({
                            message: err.message,
                            status: "FAIL"
                        })
                    } else {
                        res.status(200).send({
                            message: "Música deletada com sucesso",
                            status: "SUCESS"
                        })
                    }
                })
            } else {
                res.status(404).send({
                    message: "Não há nenhuma música para ser removida com esse id"
                })
            }
        }
    })
}

const updateMusic = (req, res) => {
    const musicId = req.params.id
    musics.findOne({id: musicId}, function (err, musicsFound) {
        if (err) {
            res.status(500).send({message: err.message})
        } else {
            if (musicsFound) {
                musics.updateOne({id: musicId}, {$set: req.body}, function(err){
                    if (err) {
                        res.status(500).send({message: err.message})
                    } else {
                        res.status(200).send({message: "Registro alterado com sucesso"})
                    }
                })
            } else {
                res.status(404).send({message: "Não há registros para serem atualizados com esse id"})
            }
        }
    })
}

const updateTitle = (req, res) => {
    const musicId = req.params.id
    const newTitle = req.body.title

    musics.findOne({id: musicId}, function (err, musicsFound) {
        if(err) {
            res.status(500).send({message: err.message})
        } else {
            if (musicsFound) {
                musics.updateOne({id: musicId}, {$set: {title: newTitle}}, function (err) {
                    if(err) {
                        res.status(500).send({message: err.message})
                    } else {
                        res.status(200).send({message: "Titulo alterado com sucesso!!"})
                    }
                })
            } else {
                res.status(404).send({message: "Não foi encontrado nenhum titulo para ser atualizado com esse id"})
            }
        }
    })
}

const getAllMusics = (req, res) => {
    musics.find(function (err, musicsFound) {
        if(err) {
            res.status(500).send({message: err.message})
        }
        if (musicsFound && musicsFound.length > 0) {
            res.status(200).send(musicsFound)
        } else {
            res.status(204).send()
        }
    })
}

const getMusic = (req, res) => {
    const musicId = req.params.id
    musics.findOneAndRemove({id: musicId}, function (err, musicsFound) {
        if(err) {
            res.status(500).send({message: err.message})
        } else {
            if (musicsFound) {
                res.status(200).send(musicsFound).toJSON({virtuals: true})
            } else {
                res.status(204)
            }
        }
    })

}

module.exports = {
    createMusic,
    deleteMusic,
    updateTitle,
    updateMusic,
    getAllMusics,
    getMusic,
}
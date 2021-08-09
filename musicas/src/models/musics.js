const mongoose = require("mongoose")

const musicsSchema = new mongoose.Schema ({
    id: {type: String},
    title: {id: String},
    artist: {type: String},
    album: {id: String},
    duration: {type: String},
    launchYear: {id: String},
}, {
    versionKey: false
})

const musics = mongoose.model('musics', musicsSchema)

module.exports = musics
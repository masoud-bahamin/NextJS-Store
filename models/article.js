const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    images: {
        type: [],
        default: []
    },
    img : String

})

const articleModel = mongoose.models.article || mongoose.model("article", schema)

export default articleModel
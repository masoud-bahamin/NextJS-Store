const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }

})

const articleModel = mongoose.models.article || mongoose.model("article", schema)

export default articleModel
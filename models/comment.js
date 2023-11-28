const mongoose = require("mongoose")


const schema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    productId: {
        type: mongoose.Types.ObjectId,
        required: true ,
        ref : "Product"
    },
    username: {
        type: String,
        required: true ,
    },
},
    { timestamps: true }
)

const commentMedel = mongoose.models.Comment || mongoose.model("Comment", schema)

export default commentMedel
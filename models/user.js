const mongoose = require("mongoose")
const Product = require("@/models/product")

const schema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index : true
    },
    password: {
        type: String,
        required: true
    },
    basket: {
        type: [mongoose.Types.ObjectId],
        default: [],
        ref: "Product"
    },
    fav: {
        type: [mongoose.Types.ObjectId],
        required: true,
        ref: "Product"
    },
    role: {
        type : String,
        enum: ["ADMIN" , "USER" , "MANAGER"],
        default: "USER"
    },
    username: String,
    name: String,
    address: String,

},
    { timestamps: true } 
)

const userModel = mongoose.models.User || mongoose.model("User", schema)

export default userModel
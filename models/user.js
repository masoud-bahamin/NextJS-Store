const mongoose = require("mongoose")

const schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    basket: {
        type: [],
        default: []
    },
    fav: {
        type: [],
        default: []
    },
    username: String,
    name: String,
    address: String,

})

const userModel = mongoose.models.User || mongoose.model("User", schema)

export default userModel
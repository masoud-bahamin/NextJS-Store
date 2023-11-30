const validator = require("fastest-validator")

const v = new validator()

const schema = {
    email: { type: "string", min: 4, max: 40 },
    password: { type: "string", min: 3, max: 40 }
}

const checkUser = v.compile(schema)

export default checkUser